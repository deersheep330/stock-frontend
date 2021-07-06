(1) install terraform & awscli

(2) aws configure

(3) export required environment variables

export AWS_DEFAULT_REGION="us-east-2"
export TF_VAR_IMAGE_VERSION="some_sha1_hash"
 
(4) terraform init & terraform plan & terraform apply
