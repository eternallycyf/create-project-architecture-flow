## Jenkinsfile

```bash
pipeline {
    agent {
      docker {
        image 'node:10'
        args '-p 20000:8080'
      }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node -v'
                sh 'echo "hello"'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
```
