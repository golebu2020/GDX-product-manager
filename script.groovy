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
        sh "docker tag pmapp-image:${TAG} golebu2023/image-registry:tagName1"
        sh "docker tag pmui-image:${TAG} golebu2023/image-registry:tagName2"
        sh "docker push ${env.REG}:pmapp-image-${TAG}"
        sh "docker push ${env.REG}:pmui-image-${TAG}"
    }
}

def deploy(){

}

def updateCommitInfo(){

}

return this