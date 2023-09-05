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
        sh "docker tag pmapp-image:1.0.0 golebu2023/image-registry:pmapp-image-1.0.0"
        sh "docker tag pmui-image:1.0.0 golebu2023/image-registry:pmui-image-1.0.0"
        sh "docker push golebu2023/image-registry:pmapp-image-1.0.0"
        sh "docker push golebu2023/image-registry:pmui-image-1.0.0"

    }
}

def deploy(){

}

def updateCommitInfo(){

}

return this