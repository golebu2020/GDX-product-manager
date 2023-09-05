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
    TAG = ${major}.${minor}.${patch}
}
 
def pushImage(){
    withCredentials([usernamePassword(credentialsId:'dockerhub-credentials', usernameVariable:'USER', passwordVariable:'PASS')]){
        sh "echo ${PASS} | docker login --username ${USER} --password-stdin"
        sh "docker -t pmapp-image:${TAG} ${env.REG}:${TAG}"
        sh "docker -t pmui-image:${TAG} ${env.REG}:${TAG}"
        sh "docker push ${env.REG}:${TAG}"
        sh "docker push ${env.REG}:${TAG}"
    }
}

def deploy(){

}

def updateCommitInfo(){

}

return this