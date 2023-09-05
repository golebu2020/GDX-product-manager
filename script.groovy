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
    sh "bash ./test_build.sh ${TAG}"
    
}
 
def pushImage(){
    withCredentials([usernamePassword(credentialsId:'dockerhub-credentials', usernameVariable:'USER', passwordVariable:'PASS')]){
        sh "echo ${PASS} | docker login --username ${USER} --password-stdin"
        sh "docker tag pmapi-image:${TAG} ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker tag pmui-image:${TAG} ${env.REG}:${env.uiImage}-${TAG}"
        sh "docker push ${env.REG}:${env.apiImage}-${TAG}"
        sh "docker push ${env.REG}:${env.uiImage}-${TAG}"
        sh "docker image prune -a -f"
        echo "My tage is ${TAG}"
    }
}

def deploy(){
    sshagent(['deploy-key']) {
    
}

}

def updateCommitInfo(){

}

return this