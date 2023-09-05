#!/usr/bin/env groovy


def gv
def major, minor, patch, TAG

pipeline{
    agent any
    environment{
        WORKSPACE=pwd()
        REG = "golebu2023/image-registry"
        uiImage="pmui-image"
        apiImage="pmapp-image"
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
                    gv.pushImage()

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