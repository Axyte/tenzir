output "tenzir_task_family" {
  value = module.tenzir_server.task_family
}

output "tenzir_server_service_name" {
  value = module.tenzir_server.service_name
}

output "fargate_cluster_name" {
  value = aws_ecs_cluster.fargate_cluster.name
}

output "fargate_task_execution_role_arn" {
  value = aws_iam_role.fargate_task_execution_role.arn
}

output "tenzir_vpc_id" {
  value = module.network.new_vpc_id
}

output "tenzir_subnet_id" {
  value = module.network.private_subnet_id
}

output "public_subnet_id" {
  value = module.network.public_subnet_id
}

output "tenzir_client_security_group_id" {
  value = aws_security_group.tenzir_client.id
}

output "efs_client_security_group_id" {
  value = aws_security_group.client_efs.id
}

output "http_app_client_security_group_id" {
  value = aws_security_group.http_app_client.id
}

output "service_discov_namespace_id" {
  value = aws_service_discovery_private_dns_namespace.main.id
}

output "service_discov_domain" {
  value = local.service_discov_domain
}

output "tenzir_lambda_name" {
  value = module.tenzir_client.lambda_name
}

output "tenzir_lambda_arn" {
  value = module.tenzir_client.lambda_arn
}

output "tenzir_lambda_role_name" {
  value = module.tenzir_client.lambda_role_name
}

output "tenzir_server_hostname" {
  value = local.tenzir_server_hostname
}

output "efs_id" {
  value = var.tenzir_storage_type == "EFS" ? module.efs[0].file_system_id : ""
}
