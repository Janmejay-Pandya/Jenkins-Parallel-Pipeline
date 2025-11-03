pipeline {
  agent any

  stages {
    stage('Parallel Builds') {
      steps {
        script {
          def branches = ['feature-login', 'feature-payment']
          def builds = [:]

          for (b in branches) {
            def branchName = b
            builds["Build-${branchName}"] = {
              node {
                stage("Checkout-${branchName}") {
                  deleteDir()
                  checkout([$class: 'GitSCM',
                            branches: [[name: "*/${branchName}"]],
                            userRemoteConfigs: [[url: 'https://github.com/Janmejay-Pandya/Jenkins-Parallel-Pipeline.git']]])
                }

                stage("Docker Build-${branchName}") {
                  echo "Building Docker image for ${branchName}"
                  sh "docker build -t payment-ui-${branchName}:latest ."
                }

                stage("List Files-${branchName}") {
                  sh 'ls -l app'
                }
              }
            }
          }
          parallel builds
        }
      }
    }
  }

  post {
    always { echo "✅ All parallel builds completed" }
  }
}
