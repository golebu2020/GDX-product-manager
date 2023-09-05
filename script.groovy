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

    TAG = "${major}.${minor}.${patch}"
    sh "bash ./test_build.sh"
    
}
 
def pushImage(){
    withCredentials([usernamePassword(credentialsId:'dockerhub-credentials', usernameVariable:'USER', passwordVariable:'PASS')]){
        sh "echo ${PASS} | docker login --username ${USER} --password-stdin"
        sh "docker tag ${env.apiImage}:latest ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker tag ${env.apiImage}:latest ${env.REG}:${env.uiImage}-${TAG}"
        sh "docker push ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker push ${env.REG}:${env.uiImage}-${TAG}"
        sh "docker rmi -f pmapp_image:latest pmui_image:latest"
        sh "docker rmi -f ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker rmi -f ${env.REG}:${env.uiImage}-${TAG}"
    }
}

def deploy(){
    sshagent(['deploy-key']){
        sh "scp -o StrictHostKeyChecking=no PM=deploy.sh PM-docker-compose-prod.yaml root@165.232.147.254:/root"
    }

}

def updateCommitInfo(){

}

return this