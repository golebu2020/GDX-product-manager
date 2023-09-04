
def testBuild(){
    sh "docker-compose run app sh -c 'python manage.py wait_for_db && python manage.py test' "
}

return this