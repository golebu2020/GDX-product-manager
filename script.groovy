#!/usr/bin/env groovy

def testBuild(){
    this.increment()
}

def increment(){
    def file = readFile("${env.WORKSPACE}/version.xml")
    def matcher = file.split(",")
    major = matcher[0]
    minor = matcher[1]
    patch = matcher[2]

    echo "Major: ${major}, Minor: ${minor}, Patch: ${patch}"
    sh "bash ./test_build.sh ${major}.${minor}.${patch}"
    TAG = "${major}.${minor}.${patch}"
}
 
def pushImage(){
    withCredentials([usernamePassword(credentialsId:'dockerhub-credentials', usernameVariable:'USER', passwordVariable:'PASS')]){
        sh "echo ${PASS} | docker login --username ${USER} --password-stdin"
        sh "docker tag ${env.apiImage}:${TAG} ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker tag ${env.uiImage}:${TAG} ${env.REG}:${env.uiImage}-${TAG}"
        sh "docker push ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker push ${env.REG}:${env.uiImage}-${TAG}"
        sh "docker rmi -f $(docker images -aq)"
    }
}

def deploy(){

}

def updateCommitInfo(){

}

return this