#!/usr/bin/env groovy


def gv
pipeline{
    agent any
    
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

        stage('deploy'){
            steps{
                script{
                    echo "deploying..."
                }
            }
        }
    }
}