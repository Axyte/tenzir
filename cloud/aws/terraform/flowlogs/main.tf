provider "aws" {
  region = var.region_name
  default_tags {
    tags = {
      module      = module.env.module_name
      provisioner = "terraform"
      stage       = terraform.workspace
    }
  }
}

module "processor" {
  source                  = "../common/s3proc"
  region_name             = var.region_name
  source_name             = "flowlogs"
  source_bucket_name      = var.source_bucket_name
  source_bucket_region    = var.source_bucket_region
  tenzir_lambda_name      = var.tenzir_lambda_name
  tenzir_lambda_arn       = var.tenzir_lambda_arn
  tenzir_lambda_role_name = var.tenzir_lambda_role_name
  import_cmd              = local.import_cmd
}
