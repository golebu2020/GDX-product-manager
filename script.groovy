#!/usr/bin/env groovy

def testBuild(){
    sh "docker-compose run app sh -c 'python manage.py wait_for_db && python manage.py test' "
    this.increment()
}

def increment(){
    def jenkins_workspace = readFile("env.WORSPACE/version.xml")
    matcher = jenkins_workspace.split(".")
    major = matcher[0]
    minor = matcher[1]
    patch = matcher[2]

    echo "Major: ${major}, Minor: ${minor}, Patch: ${patch}"
}

def pushImage(){


}

def deploy(){

}

def updateCommitInfo(){

}

return this