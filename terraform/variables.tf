variable "cloudwatch_group" {
  type = string
  default = "stock-frontend"
}

variable "name_prefix" {
  description = "Name prefix of each resources"
  type = string
  default = "stock-frontend"
}

variable "IMAGE_VERSION" {
  type = string
}
