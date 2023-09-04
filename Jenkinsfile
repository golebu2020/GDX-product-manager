#!/usr/bin/env groovy


def gv
def major, minor, patch

pipeline{
    agent any
    environment{
        WORKSPACE=pwd()
    }
    
    stages{
        stage('init'){
            steps{
                script{
                    echo "Initialization..."
                    gv = load('script.groovy')
                }
            }
        }

        stage('test and build'){
            steps{
                script{
                    echo "Testing..."
                    gv.testBuild()
                }
            }
        }

        stage("push image"){
            steps{
                script{
                    echo "Pushing image to registry..."
                    // gv.pushImage()

                }
            }
        }

        stage('deploy'){
            steps{
                script{
                    echo "deploying..."
                    // gv.deploy()
                }
            }
        }

        stage("push commit"){
            steps{
                script{
                    echo "updating version patch..."
                    // gv.updateCommitInfo()
                }
            }
        }
    }
}