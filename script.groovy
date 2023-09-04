#!/usr/bin/env groovy

def testBuild(){
    this.increment()
}

def increment(){
    def jenkins_workspace = readFile("${env.WORSPACE}/version.xml")
    matcher = jenkins_workspace.split(".")
    major = matcher[0]
    minor = matcher[1]
    patch = matcher[2]

    echo "Major: ${major}, Minor: ${minor}, Patch: ${patch}"
    sh "bash ./test_build.sh ${major}.${minor}.${patch}"
}

def pushImage(){


}

def deploy(){

}

def updateCommitInfo(){

}

return this