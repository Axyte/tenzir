include "root" {
  path = find_in_parent_folders("terragrunt.${get_env("TF_STATE_BACKEND")}.hcl")
}

dependency "core_2" {
  config_path = "../core-2"

  mock_outputs = {
    tenzir_lambda_role_name = "temporary-dummy-name"
  }
}

locals {
  region_name = get_env("TENZIR_AWS_REGION")
}


inputs = {
  region_name           = local.region_name
  tenzir_lambda_role_name = dependency.core_2.outputs.tenzir_lambda_role_name
}
