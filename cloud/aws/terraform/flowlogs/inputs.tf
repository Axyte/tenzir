variable "region_name" {}
variable "source_bucket_name" {}
variable "source_bucket_region" {}
variable "tenzir_lambda_name" {}
variable "tenzir_lambda_arn" {}
variable "tenzir_lambda_role_name" {}

locals {
  s3_subcmd = "aws s3 --region ${var.source_bucket_region} cp s3://${var.source_bucket_name}/$SRC_KEY -"
  # patch: convert csv to json first
  conv_subcmd = "python3 -c 'import csv, json, sys; [print(json.dumps(dict(r))) for r in csv.DictReader(sys.stdin, delimiter=\" \")]'"
  tenzir_subcmd = "tenzir import --type=aws.flowlogs json"
  import_cmd  = "${local.s3_subcmd} | gzip -d | ${local.conv_subcmd} | ${local.tenzir_subcmd}"
}

module "env" {
  source = "../common/env"
}
