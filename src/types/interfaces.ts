export interface ArpCache {
  address: string;
  mac: string;
  interface: string;
  permanent: string;
}

export interface AtomPackage {
  name: string;
  version: string;
  description: string;
  path: string;
  license: string;
  homepage: string;
  uid: number;
}

export interface AzureInstanceMetadata {
  location: string;
  name: string;
  offer: string;
  publisher: string;
  sku: string;
  version: string;
  os_type: string;
  platform_update_domain: string;
  platform_fault_domain: string;
  vm_id: string;
  vm_size: string;
  subscription_id: string;
  resource_group_name: string;
  placement_group_id: string;
  vm_scale_set_name: string;
  zone: string;
}

export interface AzureInstanceTag {
  vm_id: string;
  key: string;
  value: string;
}

export interface CarbonBlackInfo {
  sensor_id: number;
  config_name: string;
  collect_store_files: number;
  collect_module_loads: number;
  collect_module_info: number;
  collect_file_mods: number;
  collect_reg_mods: number;
  collect_net_conns: number;
  collect_processes: number;
  collect_cross_processes: number;
  collect_emet_events: number;
  collect_data_file_writes: number;
  collect_process_user_context: number;
  collect_sensor_operations: number;
  log_file_disk_quota_mb: number;
  log_file_disk_quota_percentage: number;
  protection_disabled: number;
  sensor_ip_addr: string;
  sensor_backend_server: string;
  event_queue: number;
  binary_queue: number;
}

export interface Carve {
  time: number;
  sha256: string;
  size: number;
  path: string;
  status: string;
  carve_guid: string;
  request_id: string;
  carve: number;
}

export interface Certificate {
  common_name: string;
  subject: string;
  issuer: string;
  ca: number;
  self_signed: number;
  not_valid_before: string;
  not_valid_after: string;
  signing_algorithm: string;
  key_algorithm: string;
  key_strength: string;
  key_usage: string;
  subject_key_id: string;
  authority_key_id: string;
  sha1: string;
  path: string;
  serial: string;
  sid: string;
  store_location: string;
  store: string;
  username: string;
  store_id: string;
  issuer2: string;
  subject2: string;
}

export interface ChromeExtensionContentScript {
  browser_type: string;
  uid: number;
  identifier: string;
  version: string;
  script: string;
  match: string;
  profile_path: string;
  path: string;
  referenced: number;
}

export interface ChromeExtension {
  browser_type: string;
  uid: number;
  name: string;
  profile: string;
  profile_path: string;
  referenced_identifier: string;
  identifier: string;
  version: string;
  description: string;
  default_locale: string;
  current_locale: string;
  update_url: string;
  author: string;
  persistent: number;
  path: string;
  permissions: string;
  permissions_json: string;
  optional_permissions: string;
  optional_permissions_json: string;
  manifest_hash: string;
  referenced: number;
  from_webstore: string;
  state: string;
  install_time: string;
  install_timestamp: number;
  manifest_json: string;
  key: string;
}

export interface CPUInfo {
  device_id: string;
  model: string;
  manufacturer: string;
  processor_type: string;
  cpu_status: number;
  number_of_cores: string;
  logical_processors: number;
  address_width: string;
  current_clock_speed: number;
  max_clock_speed: number;
  socket_designation: string;
  availability: string;
  number_of_efficiency_cores: number;
  number_of_performance_cores: number;
}

export interface CPUID {
  feature: string;
  value: string;
  output_register: string;
  output_bit: number;
  input_eax: string;
}

export interface Curl {
  url: string;
  method: string;
  user_agent: string;
  response_code: number;
  round_trip_time: number;
  bytes: number;
  result: string;
}

export interface CurlCertificate {
  hostname: string;
  common_name: string;
  organization: string;
  organization_unit: string;
  serial_number: string;
  issuer_common_name: string;
  issuer_organization: string;
  issuer_organization_unit: string;
  valid_from: string;
  valid_to: string;
  sha256_fingerprint: string;
  sha1_fingerprint: string;
  version: number;
  signature_algorithm: string;
  signature: string;
  subject_key_identifier: string;
  authority_key_identifier: string;
  key_usage: string;
  extended_key_usage: string;
  policies: string;
  subject_alternative_names: string;
  issuer_alternative_names: string;
  info_access: string;
  subject_info_access: string;
  policy_mappings: string;
  has_expired: number;
  basic_constraint: string;
  name_constraints: string;
  policy_constraints: string;
  dump_certificate: number;
  timeout: number;
  pem: string;
}

export interface Ec2InstanceMetadata {
  instance_id: string;
  instance_type: string;
  architecture: string;
  region: string;
  availability_zone: string;
  local_hostname: string;
  local_ipv4: string;
  mac: string;
  security_groups: string;
  iam_arn: string;
  ami_id: string;
  reservation_id: string;
  account_id: string;
  ssh_public_key: string;
}

export interface Ec2InstanceTags {
  instance_id: string;
  key: string;
  value: string;
}

export interface EtcHosts {
  address: string;
  hostnames: string;
  pid_with_namespace: number;
}

export interface EtcProtocols {
  name: string;
  number: number;
  alias: string;
  comment: string;
}

export interface EtcServices {
  name: string;
  port: number;
  protocol: string;
  aliases: string;
  comment: string;
}

export interface File {
  path: string;
  directory: string;
  filename: string;
  inode: number;
  uid: number;
  gid: number;
  mode: string;
  device: number;
  size: number;
  block_size: number;
  atime: number;
  mtime: number;
  ctime: number;
  btime: number;
  hard_links: number;
  symlink: number;
  type: string;
  attributes: string;
  volume_serial: string;
  file_id: string;
  file_version: string;
  product_version: string;
  original_filename: string;
  bsd_flags: string;
  pid_with_namespace: number;
  mount_namespace_id: string;
}

export interface FirefoxAddon {
  uid: number;
  name: string;
  identifier: string;
  creator: string;
  type: string;
  version: string;
  description: string;
  source_url: string;
  visible: number;
  active: number;
  disabled: number;
  autoupdate: number;
  location: string;
  path: string;
}

export interface Group {
  gid: number;
  gid_signed: number;
  groupname: string;
  group_sid: string;
  comment: string;
  is_hidden: number;
  pid_with_namespace: number;
}

export interface Hash {
  path: string;
  directory: string;
  md5: string;
  sha1: string;
  sha256: string;
  pid_with_namespace: number;
  mount_namespace_id: string;
}

export interface InterfaceAddresses {
  interface: string;
  address: string;
  mask: string;
  broadcast: string;
  point_to_point: string;
  type: string;
  friendly_name: string;
}

export interface InterfaceDetails {
  interface: string;
  mac: string;
  type: number;
  mtu: number;
  metric: number;
  flags: number;
  ipackets: number;
  opackets: number;
  ibytes: number;
  obytes: number;
  ierrors: number;
  oerrors: number;
  idrops: number;
  odrops: number;
  collisions: number;
  last_change: number;
  link_speed: number;
  pci_slot: string;
  friendly_name: string;
  description: string;
  manufacturer: string;
  connection_id: string;
  connection_status: string;
  enabled: number;
  physical_adapter: number;
  speed: number;
  service: string;
  dhcp_enabled: number;
  dhcp_lease_expires: string;
  dhcp_lease_obtained: string;
  dhcp_server: string;
  dns_domain: string;
  dns_domain_suffix_search_order: string;
  dns_host_name: string;
  dns_server_search_order: string;
}

export interface KernelInfo {
  version: string;
  arguments: string;
  path: string;
  device: string;
}

export interface ListeningPorts {
  pid: number;
  port: number;
  protocol: number;
  family: number;
  address: string;
  fd: number;
  socket: number;
  path: string;
  net_namespace: string;
}

export interface LoggedInUsers {
  type: string;
  user: string;
  tty: string;
  host: string;
  time: number;
  pid: number;
  sid: string;
  registry_hive: string;
}

export interface MemoryDevices {
  handle: string;
  array_handle: string;
  form_factor: string;
  total_width: number;
  data_width: number;
  size: number;
  set: number;
  device_locator: string;
  bank_locator: string;
  memory_type: string;
  memory_type_details: string;
  max_speed: number;
  configured_clock_speed: number;
  manufacturer: string;
  serial_number: string;
  asset_tag: string;
  part_number: string;
  min_voltage: number;
  max_voltage: number;
  configured_voltage: number;
}

export interface NpmPackages {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  homepage: string;
  path: string;
  directory: string;
  pid_with_namespace: number;
  mount_namespace_id: string;
}

export interface OsVersion {
  name: string;
  version: string;
  major: number;
  minor: number;
  patch: number;
  build: string;
  platform: string;
  platform_like: string;
  codename: string;
  arch: string;
  install_date: number;
  pid_with_namespace: number;
  mount_namespace_id: string;
}

export interface OsqueryEvents {
  name: string;
  publisher: string;
  type: string;
  subscriptions: number;
  events: number;
  refreshes: number;
  active: number;
}

export interface OsqueryExtensions {
  uuid: number;
  name: string;
  version: string;
  sdk_version: string;
  path: string;
  type: string;
}

export interface OsqueryFlags {
  name: string;
  type: string;
  description: string;
  default_value: string;
  value: string;
  shell_only: number;
}

export interface OsqueryInfo {
  pid: number;
  uuid: string;
  instance_id: string;
  version: string;
  config_hash: string;
  config_valid: number;
  extensions: string;
  build_platform: string;
  build_distro: string;
  start_time: number;
  watcher: number;
  platform_mask: number;
}

export interface OsqueryPacks {
  name: string;
  platform: string;
  version: string;
  shard: number;
  discovery_cache_hits: number;
  discovery_executions: number;
  active: number;
}

export interface OsqueryRegistry {
  registry: string;
  name: string;
  owner_uuid: number;
  internal: number;
  active: number;
}

export interface OsquerySchedule {
  name: string;
  query: string;
  interval: number;
  executions: number;
  last_executed: number;
  denylisted: number;
  output_size: number;
  wall_time: number;
  wall_time_ms: number;
  last_wall_time_ms: number;
  user_time: number;
  last_user_time: number;
  system_time: number;
  last_system_time: number;
  average_memory: number;
  last_memory: number;
}

export interface PlatformInfo {
  vendor: string;
  version: string;
  date: string;
  revision: string;
  extra: string;
  firmware_type: string;
  address: string;
  size: string;
  volume_size: number;
}

export interface ProcessMemoryMap {
  pid: number;
  start: string;
  end: string;
  permissions: string;
  offset: number;
  device: string;
  inode: number;
  path: string;
  pseudo: number;
}

export interface ProcessOpenSockets {
  pid: number;
  fd: number;
  socket: number;
  family: number;
  protocol: number;
  local_address: string;
  remote_address: string;
  local_port: number;
  remote_port: number;
  path: string;
  state: string;
  net_namespace: string;
}

export interface Processes {
  pid: number;
  name: string;
  path: string;
  cmdline: string;
  state: string;
  cwd: string;
  root: string;
  uid: number;
  gid: number;
  euid: number;
  egid: number;
  suid: number;
  sgid: number;
  on_disk: number;
  wired_size: number;
  resident_size: number;
  total_size: number;
  user_time: number;
  system_time: number;
  disk_bytes_read: number;
  disk_bytes_written: number;
  start_time: number;
  parent: number;
  pgroup: number;
  threads: number;
  nice: number;
  elevated_token: number;
  secure_process: number;
  protection_type: string;
  virtual_process: number;
  elapsed_time: number;
  handle_count: number;
  percent_processor_time: number;
  upid: number;
  uppid: number;
  cpu_type: number;
  cpu_subtype: number;
  translated: number;
  cgroup_path: string;
}

export interface PythonPackages {
  name: string;
  version: string;
  summary: string;
  author: string;
  license: string;
  path: string;
  directory: string;
  pid_with_namespace: number;
}

export interface Routes {
  destination: string;
  netmask: number;
  gateway: string;
  source: string;
  flags: number;
  interface: string;
  mtu: number;
  metric: number;
  type: string;
  hopcount: number;
}

export interface SecureBoot {
  secure_boot: number;
  secure_mode: number;
  setup_mode: number;
}

export interface SshConfigs {
  uid: number;
  block: string;
  option: string;
  ssh_config_file: string;
}

export interface StartupItems {
  name: string;
  path: string;
  args: string;
  type: string;
  source: string;
  status: string;
  username: string;
}

export interface SystemInfo {
  hostname: string;
  uuid: string;
  cpu_type: string;
  cpu_subtype: string;
  cpu_brand: string;
  cpu_physical_cores: number;
  cpu_logical_cores: number;
  cpu_microcode: string;
  physical_memory: number;
  hardware_vendor: string;
  hardware_model: string;
  hardware_version: string;
  hardware_serial: string;
  board_vendor: string;
  board_model: string;
  board_version: string;
  board_serial: string;
  computer_name: string;
  local_hostname: string;
}

export interface Time {
  weekday: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minutes: number;
  seconds: number;
  timezone: string;
  local_timezone: string;
  unix_time: number;
  timestamp: string;
  datetime: string;
  iso_8601: string;
  win_timestamp: number;
}

export interface Uptime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total_seconds: number;
}

export interface UserGroups {
  uid: number;
  gid: number;
}

export interface UserSshKeys {
  uid: number;
  path: string;
  encrypted: number;
  key_type: string;
  pid_with_namespace: number;
}

export interface Users {
  uid: number;
  gid: number;
  uid_signed: number;
  gid_signed: number;
  username: string;
  description: string;
  directory: string;
  shell: string;
  uuid: string;
  type: string;
  is_hidden: number;
  pid_with_namespace: number;
}

export interface Yara {
  path: string;
  matches: string;
  count: number;
  sig_group: string;
  sigfile: string;
  sigrule: string;
  strings: string;
  tags: string;
  sigurl: string;
  pid_with_namespace: number;
}

export interface YaraEvents {
  target_path: string;
  category: string;
  action: string;
  transaction_id: number;
  matches: string;
  count: number;
  strings: string;
  tags: string;
  time: number;
  eid: string;
}

export interface YCloudInstanceMetadata {
  instance_id: string;
  folder_id: string;
  name: string;
  description: string;
  hostname: string;
  zone: string;
  ssh_public_key: string;
  serial_port_enabled: string;
  metadata_endpoint: string;
}

export interface AppCompatShims {
  executable: string;
  path: string;
  description: string;
  install_time: number;
  type: string;
  sdb_id: string;
}

export interface Authenticode {
  path: string;
  original_program_name: string;
  serial_number: string;
  issuer_name: string;
  subject_name: string;
  result: string;
}

export interface Autoexec {
  path: string;
  name: string;
  source: string;
}

export interface BackgroundActivitiesModerator {
  path: string;
  last_execution_time: number;
  sid: string;
}

export interface BitlockerInfo {
  device_id: string;
  drive_letter: string;
  persistent_volume_id: string;
  conversion_status: number;
  protection_status: number;
  encryption_method: string;
  version: number;
  percentage_encrypted: number;
  lock_status: number;
}

export interface ChassisInfo {
  audible_alarm: string;
  breach_description: string;
  chassis_types: string;
  description: string;
  lock: string;
  manufacturer: string;
  model: string;
  security_breach: string;
  serial: string;
  smbios_tag: string;
  sku: string;
  status: string;
  visible_alarm: string;
}

export interface ChocolateyPackages {
  name: string;
  version: string;
  summary: string;
  author: string;
  license: string;
  path: string;
}

export interface Connectivity {
  disconnected: number;
  ipv4_no_traffic: number;
  ipv6_no_traffic: number;
  ipv4_subnet: number;
  ipv4_local_network: number;
  ipv4_internet: number;
  ipv6_subnet: number;
  ipv6_local_network: number;
  ipv6_internet: number;
}

export interface DefaultEnvironment {
  variable: string;
  value: string;
  expand: number;
}

export interface DiskInfo {
  partitions: number;
  disk_index: number;
  type: string;
  id: string;
  pnp_device_id: string;
  disk_size: BigInt;
  manufacturer: string;
  hardware_model: string;
  name: string;
  serial: string;
  description: string;
}

export interface DnsCache {
  name: string;
  type: string;
  flags: number;
}

export interface Drivers {
  device_id: string;
  device_name: string;
  image: string;
  description: string;
  service: string;
  service_key: string;
  version: string;
  inf: string;
  class: string;
  provider: string;
  manufacturer: string;
  driver_key: string;
  date: number;
  signed: number;
}

export interface HvciStatus {
  version: string;
  instance_identifier: string;
  vbs_status: string;
  code_integrity_policy_enforcement_status: string;
  umci_policy_status: string;
}

export interface IeExtensions {
  name: string;
  registry_path: string;
  version: string;
  path: string;
}

export interface IntelMeInfo {
  version: string;
}

export interface KvaSpeculativeInfo {
  kva_shadow_enabled: number;
  kva_shadow_user_global: number;
  kva_shadow_pcid: number;
  kva_shadow_inv_pcid: number;
  bp_mitigations: number;
  bp_system_pol_disabled: number;
  bp_microcode_disabled: number;
  cpu_spec_ctrl_supported: number;
  ibrs_support_enabled: number;
  stibp_support_enabled: number;
  cpu_pred_cmd_supported: number;
}

export interface LogicalDrives {
  device_id: string;
  type: string;
  description: string;
  free_space: number;
  size: number;
  file_system: string;
  boot_partition: number;
}

export interface LogonSessions {
  logon_id: number;
  user: string;
  logon_domain: string;
  authentication_package: string;
  logon_type: string;
  session_id: number;
  logon_sid: string;
  logon_time: number;
  logon_server: string;
  dns_domain_name: string;
  upn: string;
  logon_script: string;
  profile_path: string;
  home_directory: string;
  home_directory_drive: string;
}

export interface NTDomains {
  name: string;
  client_site_name: string;
  dc_site_name: string;
  dns_forest_name: string;
  domain_controller_address: string;
  domain_controller_name: string;
  domain_name: string;
  status: string;
}

export interface NTFSACLPermissions {
  path: string;
  type: string;
  principal: string;
  access: string;
  inherited_from: string;
}

export interface NTFSJournalEvents {
  action: string;
  category: string;
  old_path: string;
  path: string;
  record_timestamp: string;
  record_usn: string;
  node_ref_number: string;
  parent_ref_number: string;
  drive_letter: string;
  file_attributes: string;
  partial: number;
  time: number;
  eid: string;
}

export interface OfficeMRU {
  application: string;
  version: string;
  path: string;
  last_opened_time: number;
  sid: string;
}

export interface Patches {
  csname: string;
  hotfix_id: string;
  caption: string;
  description: string;
  fix_comments: string;
  installed_by: string;
  install_date: string;
  installed_on: string;
}

export interface PhysicalDiskPerformance {
  name: string;
  avg_disk_bytes_per_read: number;
  avg_disk_bytes_per_write: number;
  avg_disk_read_queue_length: number;
  avg_disk_write_queue_length: number;
  avg_disk_sec_per_read: number;
  avg_disk_sec_per_write: number;
  current_disk_queue_length: number;
  percent_disk_read_time: number;
  percent_disk_write_time: number;
  percent_disk_time: number;
  percent_idle_time: number;
}

export interface Pipes {
  pid: number;
  name: string;
  instances: number;
  max_instances: number;
  flags: string;
}

export interface PowershellEvents {
  time: number;
  datetime: string;
  script_block_id: string;
  script_block_count: number;
  script_text: string;
  script_name: string;
  script_path: string;
  cosine_similarity: number;
}

export interface Prefetch {
  path: string;
  filename: string;
  hash: string;
  last_run_time: number;
  other_run_times: string;
  run_count: number;
  size: number;
  volume_serial: string;
  volume_creation: string;
  accessed_files_count: number;
  accessed_directories_count: number;
  accessed_files: string;
  accessed_directories: string;
}

export interface ProcessEtwEvents {
  type: string;
  pid: number;
  ppid: number;
  session_id: number;
  flags: number;
  exit_code: number;
  path: string;
  cmdline: string;
  username: string;
  token_elevation_type: string;
  token_elevation_status: number;
  mandatory_label: string;
  datetime: string;
  time_windows: number;
  time: number;
  eid: number;
  header_pid: number;
  process_sequence_number: number;
  parent_process_sequence_number: number;
}

export interface Programs {
  name: string;
  version: string;
  install_location: string;
  install_source: string;
  language: string;
  publisher: string;
  uninstall_string: string;
  install_date: string;
  identifying_number: string;
}

export interface Registry {
  key: string;
  path: string;
  name: string;
  type: string;
  data: string;
  mtime: number;
}

export interface ScheduledTask {
  name: string;
  action: string;
  path: string;
  enabled: number;
  state: string;
  hidden: number;
  last_run_time: number;
  next_run_time: number;
  last_run_message: string;
  last_run_code: string;
}

export interface SecurityProfileInfo {
  minimum_password_age: number;
  maximum_password_age: number;
  minimum_password_length: number;
  password_complexity: number;
  password_history_size: number;
  lockout_bad_count: number;
  logon_to_change_password: number;
  force_logoff_when_expire: number;
  new_administrator_name: string;
  new_guest_name: string;
  clear_text_password: number;
  lsa_anonymous_name_lookup: number;
  enable_admin_account: number;
  enable_guest_account: number;
  audit_system_events: number;
  audit_logon_events: number;
  audit_object_access: number;
  audit_privilege_use: number;
  audit_policy_change: number;
  audit_account_manage: number;
  audit_process_tracking: number;
  audit_ds_access: number;
  audit_account_logon: number;
}

export interface Services {
  name: string;
  service_type: string;
  display_name: string;
  status: string;
  pid: number;
  start_type: string;
  win32_exit_code: number;
  service_exit_code: number;
  path: string;
  module_path: string;
  description: string;
  user_account: string;
}

export interface SharedResources {
  description: string;
  install_date: string;
  status: string;
  allow_maximum: number;
  maximum_allowed: number;
  name: string;
  path: string;
  type: number;
  type_name: string;
}

export interface Shellbags {
  sid: string;
  source: string;
  path: string;
  modified_time: number;
  created_time: number;
  accessed_time: number;
  mft_entry: number;
  mft_sequence: number;
}

export interface Shimcache {
  entry: number;
  path: string;
  modified_time: number;
  execution_flag: number;
}

export interface TpmInfo {
  activated: number;
  enabled: number;
  owned: number;
  manufacturer_version: string;
  manufacturer_id: number;
  manufacturer_name: string;
  product_name: string;
  physical_presence_version: string;
  spec_version: string;
}

export interface UserAssist {
  path: string;
  last_execution_time: number;
  count: number;
  sid: string;
}

export interface VideoInfo {
  color_depth: number;
  driver: string;
  driver_date: number;
  driver_version: string;
  manufacturer: string;
  model: string;
  series: string;
  video_mode: string;
}

export interface WinBaseObj {
  session_id: number;
  object_name: string;
  object_type: string;
}

export interface WindowsCrashes {
  datetime: string;
  module: string;
  path: string;
  pid: number;
  tid: number;
  version: string;
  process_uptime: number;
  stack_trace: string;
  exception_code: string;
  exception_message: string;
  exception_address: string;
  registers: string;
  command_line: string;
  current_directory: string;
  username: string;
  machine_name: string;
  major_version: number;
  minor_version: number;
  build_number: number;
  type: string;
  crash_path: string;
}

export interface WindowsEventlog {
  channel: string;
  datetime: string;
  task: number;
  level: number;
  provider_name: string;
  provider_guid: string;
  computer_name: string;
  eventid: number;
  keywords: string;
  data: string;
  pid: number;
  tid: number;
  time_range: string;
  timestamp: string;
  xpath: string;
}

export interface WindowsEvents {
  time: number;
  datetime: string;
  source: string;
  provider_name: string;
  provider_guid: string;
  computer_name: string;
  eventid: number;
  task: number;
  level: number;
  keywords: string;
  data: string;
  eid: string;
}

export interface WindowsFirewallRules {
  name: string;
  app_name: string;
  action: string;
  enabled: number;
  grouping: string;
  direction: string;
  protocol: string;
  local_addresses: string;
  remote_addresses: string;
  local_ports: string;
  remote_ports: string;
  icmp_types_codes: string;
  profile_domain: number;
  profile_private: number;
  profile_public: number;
  service_name: string;
}

export interface WindowsOptionalFeatures {
  name: string;
  caption: string;
  state: number;
  statename: string;
}

export interface WindowsSecurityCenter {
  firewall: string;
  autoupdate: string;
  antivirus: string;
  antispyware: string;
  internet_settings: string;
  windows_security_center_service: string;
  user_account_control: string;
}

export interface WindowsSecurityProducts {
  type: string;
  name: string;
  state: string;
  state_timestamp: string;
  remediation_path: string;
  signatures_up_to_date: number;
}

export interface WindowsUpdateHistory {
  client_app_id: string;
  date: number;
  description: string;
  hresult: number;
  operation: string;
  result_code: string;
  server_selection: string;
  service_id: string;
  support_url: string;
  title: string;
  update_id: string;
  update_revision: number;
}

export interface WmiBiosInfo {
  name: string;
  value: string;
}

export interface WmiCliEventConsumers {
  name: string;
  command_line_template: string;
  executable_path: string;
  class: string;
  relative_path: string;
}

export interface WmiEventFilters {
  name: string;
  query: string;
  query_language: string;
  class: string;
  relative_path: string;
}

export interface WmiFilterConsumerBinding {
  consumer: string;
  filter: string;
  class: string;
  relative_path: string;
}

export interface WmiScriptEventConsumers {
  name: string;
  scripting_engine: string;
  script_file_name: string | null;
  script_text: string | null;
  class: string;
  relative_path: string;
}

export interface AcpiTables {
  name: string;
  size: number;
  md5: string;
}

export interface Augeas {
  node: string;
  value: string;
  label: string;
  path: string;
}

export interface AuthorizedKeys {
  uid: number;
  algorithm: string;
  key: string;
  options: string;
  comment: string;
  key_file: string;
  pid_with_namespace: number;
}

export interface BlockDevices {
  name: string;
  parent: string;
  vendor: string;
  model: string;
  size: number;
  block_size: number;
  uuid: string;
  type: string;
  label: string;
}

export interface CpuTime {
  core: number;
  user: number;
  nice: number;
  system: number;
  idle: number;
  iowait: number;
  irq: number;
  softirq: number;
  steal: number;
  guest: number;
  guest_nice: number;
}

export interface Crontab {
  event: string;
  minute: string;
  hour: string;
  day_of_month: string;
  month: string;
  day_of_week: string;
  command: string;
  path: string;
  pid_with_namespace: number;
}

export interface DeviceFile {
  device: string;
  partition: string;
  path: string;
  filename: string;
  inode: number;
  uid: number;
  gid: number;
  mode: string;
  size: number;
  block_size: number;
  atime: number;
  mtime: number;
  ctime: number;
  hard_links: number;
  type: string;
}

export interface DeviceHash {
  device: string;
  partition: string;
  inode: number;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface DevicePartitions {
  device: string;
  partition: number;
  label: string;
  type: string;
  offset: number;
  blocks_size: number;
  blocks: number;
  inodes: number;
  flags: number;
}

export interface DiskEncryption {
  name: string;
  uuid: string;
  encrypted: number;
  type: string;
  encryption_status: string;
  uid: string;
  user_uuid: string;
  filevault_status: string;
}

export interface DnsResolvers {
  id: number;
  type: string;
  address: string;
  netmask: string;
  options: number;
  pid_with_namespace: number;
}

export interface DockerContainerEnvs {
  id: string;
  key: string;
  value: string;
}

export interface DockerContainerFsChanges {
  id: string;
  path: string;
  change_type: string;
}

export interface DockerContainerLabels {
  id: string;
  key: string;
  value: string;
}

export interface DockerContainerMounts {
  id: string;
  type: string;
  name: string;
  source: string;
  destination: string;
  driver: string;
  mode: string;
  rw: number;
  propagation: string;
}

export interface DockerContainerNetworks {
  id: string;
  name: string;
  network_id: string;
  endpoint_id: string;
  gateway: string;
  ip_address: string;
  ip_prefix_len: number;
  ipv6_gateway: string;
  ipv6_address: string;
  ipv6_prefix_len: number;
  mac_address: string;
}

export interface DockerContainerPorts {
  id: string;
  type: string;
  port: number;
  host_ip: string;
  host_port: number;
}

export interface DockerContainerProcesses {
  id: string;
  pid: number;
  name: string;
  cmdline: string;
  state: string;
  uid: number;
  gid: number;
  euid: number;
  egid: number;
  suid: number;
  sgid: number;
  wired_size: number;
  resident_size: number;
  total_size: number;
  start_time: number;
  parent: number;
  pgroup: number;
  threads: number;
  nice: number;
  user: string;
  time: string;
  cpu: number;
  mem: number;
}

export interface DockerContainerStats {
  id: string;
  name: string;
  pids: number;
  read: number;
  preread: number;
  interval: number;
  disk_read: number;
  disk_write: number;
  num_procs: number;
  cpu_total_usage: number;
  cpu_kernelmode_usage: number;
  cpu_usermode_usage: number;
  system_cpu_usage: number;
  online_cpus: number;
  pre_cpu_total_usage: number;
  pre_cpu_kernelmode_usage: number;
  pre_cpu_usermode_usage: number;
  pre_system_cpu_usage: number;
  pre_online_cpus: number;
  memory_usage: number;
  memory_cached: number;
  memory_max_usage: number;
  memory_limit: number;
  network_rx_bytes: number;
  network_tx_bytes: number;
}

export interface DockerContainers {
  id: string;
  name: string;
  image: string;
  image_id: string;
  command: string;
  created: number;
  state: string;
  status: string;
  pid: number;
  path: string;
  config_entrypoint: string;
  started_at: string;
  finished_at: string;
  privileged: number;
  security_options: string;
  env_variables: string;
  readonly_rootfs: number;
  cgroup_namespace: string;
  ipc_namespace: string;
  mnt_namespace: string;
  net_namespace: string;
  pid_namespace: string;
  user_namespace: string;
  uts_namespace: string;
}

export interface DockerImageHistory {
  id: string;
  created: number;
  size: number;
  created_by: string;
  tags: string;
  comment: string;
}

export interface DockerImageLabels {
  id: string;
  key: string;
  value: string;
}

export interface DockerImageLayers {
  id: string;
  layer_id: string;
  layer_order: number;
}

export interface DockerImages {
  id: string;
  created: number;
  size_bytes: number;
  tags: string;
}

export interface DockerInfo {
  id: string;
  containers: number;
  containers_running: number;
  containers_paused: number;
  containers_stopped: number;
  images: number;
  storage_driver: string;
  memory_limit: number;
  swap_limit: number;
  kernel_memory: number;
  cpu_cfs_period: number;
  cpu_cfs_quota: number;
  cpu_shares: number;
  cpu_set: number;
  ipv4_forwarding: number;
  bridge_nf_iptables: number;
  bridge_nf_ip6tables: number;
  oom_kill_disable: number;
  logging_driver: string;
  cgroup_driver: string;
  kernel_version: string;
  os: string;
  os_type: string;
  architecture: string;
  cpus: number;
  memory: number;
  http_proxy: string;
  https_proxy: string;
  no_proxy: string;
  name: string;
  server_version: string;
  root_dir: string;
}

export interface DockerNetworkLabels {
  id: string;
  key: string;
  value: string | null;
}

export interface DockerNetworks {
  id: string;
  name: string;
  driver: string;
  created: number;
  enable_ipv6: number;
  subnet: string;
  gateway: string;
}

export interface DockerVersion {
  version: string;
  api_version: string;
  min_api_version: string;
  git_commit: string;
  go_version: string;
  os: string;
  arch: string;
  kernel_version: string;
  build_time: string;
}

export interface DockerVolumeLabels {
  name: string;
  key: string;
  value: string;
}

export interface DockerVolumes {
  name: string;
  driver: string;
  mount_point: string;
  type: string;
}

export interface ExtendedAttributes {
  path: string;
  directory: string;
  key: string;
  value: string;
  base64: number;
}

export interface FileEvents {
  target_path: string;
  category: string;
  action: string;
  transaction_id: number;
  inode: number;
  uid: number;
  gid: number;
  mode: string;
  size: number;
  atime: number;
  mtime: number;
  ctime: number;
  md5: string;
  sha1: string;
  sha256: string;
  hashed: number;
  time: number;
  eid: string;
}

export interface HardwareEvents {
  action: string;
  path: string;
  type: string;
  driver: string;
  vendor: string;
  vendor_id: string;
  model: string;
  model_id: string;
  serial: string;
  revision: string;
  time: number;
  eid: string;
}

export interface InterfaceIpv6 {
  interface: string;
  hop_limit: number;
  forwarding_enabled: number;
  redirect_accept: number;
  rtadv_accept: number;
}

export interface KnownHosts {
  uid: number;
  key: string;
  key_file: string;
}

export interface Last {
  username: string;
  tty: string;
  pid: number;
  type: number;
  type_name: string;
  time: number;
  host: string;
}

export interface LoadAverage {
  period: string;
  average: string;
}

export interface Magic {
  path: string;
  magic_db_files: string;
  data: string;
  mime_type: string;
  mime_encoding: string;
}

export interface MemoryArrayMappedAddresses {
  handle: string;
  memory_array_handle: string;
  starting_address: string;
  ending_address: string;
  partition_width: number;
}

export interface MemoryArrays {
  handle: string;
  location: string;
  use: string;
  memory_error_correction: string;
  max_capacity: number;
  memory_error_info_handle: string;
  number_memory_devices: number;
}

export interface MemoryDeviceMappedAddresses {
  handle: string;
  memory_device_handle: string;
  memory_array_mapped_address_handle: string;
  starting_address: string;
  ending_address: string;
  partition_row_position: number;
  interleave_position: number;
  interleave_data_depth: number;
}

export interface MemoryErrorInfo {
  handle: string;
  error_type: string;
  error_granularity: string;
  error_operation: string;
  vendor_syndrome: string;
  memory_array_error_address: string;
  device_error_address: string;
  error_resolution: string;
}

export interface Mounts {
  device: string;
  device_alias: string;
  path: string;
  type: string;
  blocks_size: number;
  blocks: number;
  blocks_free: number;
  blocks_available: number;
  inodes: number;
  inodes_free: number;
  flags: string;
}

export interface OemStrings {
  handle: string;
  number: number;
  value: string;
}

export interface PciDevices {
  pci_slot: string;
  pci_class: string;
  driver: string;
  vendor: string;
  vendor_id: string;
  model: string;
  model_id: string;
  pci_class_id: string;
  pci_subclass_id: string;
  pci_subclass: string;
  subsystem_vendor_id: string;
  subsystem_vendor: string;
  subsystem_model_id: string;
  subsystem_model: string;
}

export interface ProcessEnvs {
  pid: number;
  key: string;
  value: string;
}

export interface ProcessEvents {
  pid: number;
  path: string;
  mode: string;
  cmdline: string;
  cmdline_size: number;
  env: string;
  env_count: number;
  env_size: number;
  cwd: string;
  auid: number;
  uid: number;
  euid: number;
  gid: number;
  egid: number;
  owner_uid: number;
  owner_gid: number;
  atime: number;
  mtime: number;
  ctime: number;
  btime: number;
  overflows: string;
  parent: number;
  time: number;
  uptime: number;
  eid: string;
  status: number;
  fsuid: number;
  suid: number;
  fsgid: number;
  sgid: number;
  syscall: string;
}

export interface ProcessOpenFiles {
  pid: number;
  fd: number;
  path: string;
}

export interface PrometheusMetrics {
  target_name: string;
  metric_name: string;
  metric_value: number;
  timestamp_ms: number;
}

export interface ShellHistory {
  uid: number;
  time: number;
  command: string;
  history_file: string;
}

export interface SmbiosTables {
  number: number;
  type: number;
  description: string;
  handle: number;
  header_size: number;
  size: number;
  md5: string;
}

export interface SocketEvents {
  action: string;
  pid: number;
  path: string;
  fd: string;
  auid: number;
  status: string;
  family: number;
  protocol: number;
  local_address: string;
  remote_address: string;
  local_port: number;
  remote_port: number;
  socket: string;
  time: number;
  uptime: number;
  eid: string;
  success: number;
}

export interface Sudoers {
  source: string;
  header: string;
  rule_details: string;
}

export interface SuidBin {
  path: string;
  username: string;
  groupname: string;
  permissions: string;
  pid_with_namespace: number;
}

export interface SystemControls {
  name: string;
  oid: string;
  subsystem: string;
  current_value: string;
  config_value: string;
  type: string;
  field_name: string;
}

export interface UlimitInfo {
  type: string;
  soft_limit: string;
  hard_limit: string;
}

export interface UsbDevices {
  usb_address: number;
  usb_port: number;
  vendor: string;
  vendor_id: string;
  version: string;
  model: string;
  model_id: string;
  serial: string;
  class: string;
  subclass: string;
  protocol: string;
  removable: number;
}

export interface UserEvents {
  uid: number;
  auid: number;
  pid: number;
  message: string;
  type: number;
  path: string;
  address: string;
  terminal: string;
  time: number;
  uptime: number;
  eid: string;
}

export interface ApparmorEvents {
  type: string;
  message: string;
  time: number;
  uptime: number;
  eid: string;
  apparmor: string;
  operation: string;
  parent: number;
  profile: string;
  name: string;
  pid: number;
  comm: string;
  denied_mask: string;
  capname: string;
  fsuid: number;
  ouid: number;
  capability: number;
  requested_mask: string;
  info: string;
  error: string;
  namespace: string;
  label: string;
}

export interface ApparmorProfiles {
  path: string;
  name: string;
  attach: string;
  mode: string;
  sha1: string;
}

export interface AptSources {
  name: string;
  source: string;
  base_uri: string;
  release: string;
  version: string;
  maintainer: string;
  components: string;
  architectures: string;
  pid_with_namespace: number;
}

export interface BpfProcessEvents {
  tid: number;
  pid: number;
  parent: number;
  uid: number;
  gid: number;
  cid: number;
  exit_code: string;
  probe_error: number;
  syscall: string;
  path: string;
  cwd: string;
  cmdline: string;
  duration: number;
  json_cmdline: string;
  ntime: string;
  time: number;
  eid: number;
}

export interface BpfSocketEvents {
  tid: number;
  pid: number;
  parent: number;
  uid: number;
  gid: number;
  cid: number;
  exit_code: string;
  probe_error: number;
  syscall: string;
  path: string;
  fd: string;
  family: number;
  type: number;
  protocol: number;
  local_address: string;
  remote_address: string;
  local_port: number;
  remote_port: number;
  duration: number;
  ntime: string;
  time: number;
  eid: number;
}

export interface DebPackages {
  name: string;
  version: string;
  source: string;
  size: number;
  arch: string;
  revision: string;
  status: string;
  maintainer: string;
  section: string;
  priority: string;
  admindir: string;
  pid_with_namespace: number;
  mount_namespace_id: string;
}

export interface Iptables {
  filter_name: string;
  chain: string;
  policy: string;
  target: string;
  protocol: number;
  src_port: string;
  dst_port: string;
  src_ip: string;
  src_mask: string;
  iniface: string;
  iniface_mask: string;
  dst_ip: string;
  dst_mask: string;
  outiface: string;
  outiface_mask: string;
  match: string;
  packets: number;
  bytes: number;
}

export interface KernelKeys {
  serial_number: string;
  flags: string;
  usage: number;
  timeout: string;
  permissions: string;
  uid: number;
  gid: number;
  type: string;
  description: string;
}

export interface KernelModules {
  name: string;
  size: number;
  used_by: string;
  status: string;
  address: string;
}

export interface LxdCertificates {
  name: string;
  type: string;
  fingerprint: string;
  certificate: string;
}

export interface LxdCluster {
  server_name: string;
  enabled: number;
  member_config_entity: string;
  member_config_name: string;
  member_config_key: string;
  member_config_value: string;
  member_config_description: string;
}

export interface LxdClusterMembers {
  server_name: string;
  url: string;
  database: number;
  status: string;
  message: string;
}

export interface LxdImages {
  id: string;
  architecture: string;
  os: string;
  release: string;
  description: string;
  aliases: string;
  filename: string;
  size: number;
  auto_update: number;
  cached: number;
  public: number;
  created_at: string;
  expires_at: string;
  uploaded_at: string;
  last_used_at: string;
  update_source_server: string;
  update_source_protocol: string;
  update_source_certificate: string;
  update_source_alias: string;
}

export interface LxdInstanceConfig {
  name: string;
  key: string;
  value: string;
}

export interface LxdInstanceDevices {
  name: string;
  device: string;
  device_type: string;
  key: string;
  value: string;
}

export interface LxdInstances {
  name: string;
  status: string;
  stateful: number;
  ephemeral: number;
  created_at: string;
  base_image: string;
  architecture: string;
  os: string;
  description: string;
  pid: number;
  processes: number;
}

export interface LxdNetworks {
  name: string;
  type: string;
  managed: number;
  ipv4_address: string;
  ipv6_address: string;
  used_by: string;
  bytes_received: number;
  bytes_sent: number;
  packets_received: number;
  packets_sent: number;
  hwaddr: string;
  state: string;
  mtu: number;
}

export interface LxdStoragePools {
  name: string;
  driver: string;
  source: string;
  size: string;
  space_used: number;
  space_total: number;
  inodes_used: number;
  inodes_total: number;
}

export interface MdDevices {
  device_name: string;
  status: string;
  raid_level: number;
  size: number;
  chunk_size: number;
  raid_disks: number;
  nr_raid_disks: number;
  working_disks: number;
  active_disks: number;
  failed_disks: number;
  spare_disks: number;
  superblock_state: string;
  superblock_version: string;
  superblock_update_time: number;
  bitmap_on_mem: string;
  bitmap_chunk_size: string;
  bitmap_external_file: string;
  recovery_progress: string;
  recovery_finish: string;
  recovery_speed: string;
  resync_progress: string;
  resync_finish: string;
  resync_speed: string;
  reshape_progress: string;
  reshape_finish: string;
  reshape_speed: string;
  check_array_progress: string;
  check_array_finish: string;
  check_array_speed: string;
  unused_devices: string;
  other: string;
}

export interface MdDrives {
  md_device_name: string;
  drive_name: string;
  slot: number;
  state: string;
}

export interface MdPersonalities {
  name: string;
}

export interface MemoryInfo {
  memory_total: number;
  memory_free: number;
  memory_available: number;
  buffers: number;
  cached: number;
  swap_cached: number;
  active: number;
  inactive: number;
  swap_total: number;
  swap_free: number;
}

export interface MemoryMap {
  name: string;
  start: string;
  end: string;
}

export interface Msr {
  processor_number: number;
  turbo_disabled: number;
  turbo_ratio_limit: number;
  platform_info: number;
  perf_ctl: number;
  perf_status: number;
  feature_control: number;
  rapl_power_limit: number;
  rapl_energy_status: number;
  rapl_power_units: number;
}

export interface PortageKeywords {
  package: string;
  version: string;
  keyword: string;
  mask: number;
  unmask: number;
}

export interface PortagePackages {
  package: string;
  version: string;
  slot: string;
  build_time: number;
  repository: string;
  eapi: number;
  size: number;
  world: number;
}

export interface PortageUse {
  package: string;
  version: string;
  use: string;
}

export interface ProcessFileEvents {
  operation: string;
  pid: number;
  ppid: number;
  time: number;
  executable: string;
  partial: string;
  cwd: string;
  path: string;
  dest_path: string;
  uid: string;
  gid: string;
  auid: string;
  euid: string;
  egid: string;
  fsuid: string;
  fsgid: string;
  suid: string;
  sgid: string;
  uptime: number;
  eid: string;
}

export interface ProcessNamespaces {
  pid: number;
  cgroup_namespace: string;
  ipc_namespace: string;
  mnt_namespace: string;
  net_namespace: string;
  pid_namespace: string;
  user_namespace: string;
  uts_namespace: string;
}

export interface ProcessOpenPipes {
  pid: number;
  fd: number;
  mode: string;
  inode: number;
  type: string;
  partner_pid: number;
  partner_fd: number;
  partner_mode: string;
}

export interface RpmPackageFiles {
  package: string;
  path: string;
  username: string;
  groupname: string;
  mode: string;
  size: number;
  sha256: string;
}

export interface RpmPackages {
  name: string;
  version: string;
  release: string;
  source: string;
  size: number;
  sha1: string;
  arch: string;
  epoch: number;
  install_time: number;
  vendor: string;
  package_group: string;
  pid_with_namespace: number;
  mount_namespace_id: string;
}

export interface SeccompEvents {
  time: number;
  uptime: number;
  auid: number;
  uid: number;
  gid: number;
  ses: number;
  pid: number;
  comm: string;
  exe: string;
  sig: number;
  arch: string;
  syscall: string;
  compat: number;
  ip: string;
  code: string;
}

export interface SelinuxEvents {
  type: string;
  message: string;
  time: number;
  uptime: number;
  eid: string;
}

export interface SelinuxSettings {
  scope: string;
  key: string;
  value: string;
}

export interface Shadow {
  password_status: string;
  hash_alg: string;
  last_change: number;
  min: number;
  max: number;
  warning: number;
  inactive: number;
  expire: number;
  flag: number;
  username: string;
}

export interface SharedMemory {
  shmid: number;
  owner_uid: number;
  creator_uid: number;
  pid: number;
  creator_pid: number;
  atime: number;
  dtime: number;
  ctime: number;
  permissions: string;
  size: number;
  attached: number;
  status: string;
  locked: number;
}

export interface SyslogEvent {
  time: number;
  datetime: string;
  host: string;
  severity: number;
  facility: string;
  tag: string;
  message: string;
  eid: string;
}

export interface SystemdUnit {
  id: string;
  description: string;
  load_state: string;
  active_state: string;
  sub_state: string;
  unit_file_state: string;
  following: string;
  object_path: string;
  job_id: number;
  job_type: string;
  job_path: string;
  fragment_path: string;
  user: string;
  source_path: string;
}

export interface YumSource {
  name: string;
  baseurl: string;
  mirrorlist: string;
  enabled: string;
  gpgcheck: string;
  gpgkey: string;
  pid_with_namespace: number;
}

export interface AccountPolicyData {
  uid: number;
  creation_time: number;
  failed_login_count: number;
  failed_login_timestamp: number;
  password_last_set_time: number;
}

export interface AdConfig {
  name: string;
  domain: string;
  option: string;
  value: string;
}

export interface Alf {
  allow_signed_enabled: number;
  firewall_unload: number;
  global_state: number;
  logging_enabled: number;
  logging_option: number;
  stealth_enabled: number;
  version: string;
}

export interface AlfExceptions {
  path: string;
  state: number;
}

export interface AlfExplicitAuths {
  process: string;
}

export interface AppSchemes {
  scheme: string;
  handler: string;
  enabled: number;
  external: number;
  protected: number;
}

export interface Apps {
  name: string;
  path: string;
  bundle_executable: string;
  bundle_identifier: string;
  bundle_name: string;
  bundle_short_version: string;
  bundle_version: string;
  bundle_package_type: string;
  environment: string;
  element: string;
  compiler: string;
  development_region: string;
  display_name: string;
  info_string: string;
  minimum_system_version: string;
  category: string;
  applescript_enabled: string;
  copyright: string;
  last_opened_time: number;
}

export interface Asl {
  time: number;
  time_nano_sec: number;
  host: string;
  sender: string;
  facility: string;
  pid: number;
  gid: number;
  uid: number;
  level: number;
  message: string;
  ref_pid: number;
  ref_proc: string;
  extra: string;
}

export interface AuthorizationMechanisms {
  label: string;
  plugin: string;
  mechanism: string;
  privileged: string;
  entry: string;
}

export interface Authorizations {
  label: string;
  modified: string;
  allow_root: string;
  timeout: string;
  version: string;
  tries: string;
  authenticate_user: string;
  shared: string;
  comment: string;
  created: string;
  class: string;
  session_owner: string;
}

export interface Battery {
  manufacturer: string;
  manufacture_date: number;
  model: string;
  serial_number: string;
  cycle_count: number;
  health: string;
  condition: string;
  state: string;
  charging: number;
  charged: number;
  designed_capacity: number;
  max_capacity: number;
  current_capacity: number;
  percent_remaining: number;
  amperage: number;
  voltage: number;
  minutes_until_empty: number;
  minutes_to_full_charge: number;
}

export interface BrowserPlugins {
  uid: number;
  name: string;
  identifier: string;
  version: string;
  sdk: string;
  description: string;
  development_region: string;
  native: number;
  path: string;
  disabled: number;
}

export interface Crashes {
  type: string;
  pid: number;
  path: string;
  crash_path: string;
  identifier: string;
  version: string;
  parent: number;
  responsible: string;
  uid: number;
  datetime: string;
  crashed_thread: number;
  stack_trace: string;
  exception_type: string;
  exception_codes: string;
  exception_notes: string;
  registers: string;
}

export interface CupsDestinations {
  name: string;
  option_name: string;
  option_value: string;
}

export interface CupsJobs {
  title: string;
  destination: string;
  user: string;
  format: string;
  size: number;
  completed_time: number;
  processing_time: number;
  creation_time: number;
}

export interface DeviceFirmware {
  type: string;
  device: string;
  version: string;
}

export interface DiskEvent {
  action: string;
  path: string;
  name: string;
  device: string;
  uuid: string;
  size: number;
  ejectable: number;
  mountable: number;
  writable: number;
  content: string;
  media_name: string;
  vendor: string;
  filesystem: string;
  checksum: string;
  time: number;
  eid: string;
}

export interface EsProcessEvent {
  version: number;
  seq_num: number;
  global_seq_num: number;
  pid: number;
  path: string;
  parent: number;
  original_parent: number;
  cmdline: string;
  cmdline_count: number;
  env: string;
  env_count: number;
  cwd: string;
  uid: number;
  euid: number;
  gid: number;
  egid: number;
  username: string;
  signing_id: string;
  team_id: string;
  cdhash: string;
  platform_binary: number;
  exit_code: number;
  child_pid: number;
  time: number;
  event_type: string;
  eid: string;
  codesigning_flags: string;
}

export interface EsProcessFileEvent {
  version: number;
  seq_num: number;
  global_seq_num: number;
  pid: number;
  parent: number;
  path: string;
  filename: string;
  dest_filename: string;
  event_type: string;
  time: number;
  eid: string;
}

export interface EventTap {
  enabled: number;
  event_tap_id: number;
  event_tapped: string;
  process_being_tapped: number;
  tapping_process: number;
}

export interface FanSpeedSensor {
  fan: string;
  name: string;
  actual: number;
  min: number;
  max: number;
  target: number;
}

export interface Gatekeeper {
  assessments_enabled: number;
  dev_id_enabled: number;
  version: string;
  opaque_version: string;
}

export interface GatekeeperApprovedApps {
  path: string;
  requirement: string;
  ctime: number;
  mtime: number;
}

export interface HomebrewPackages {
  name: string;
  path: string;
  version: string;
  prefix: string;
}

export interface IBridgeInfo {
  boot_uuid: string;
  coprocessor_version: string;
  firmware_version: string;
  unique_chip_id: string;
}

export interface IOKitDeviceTree {
  name: string;
  class: string;
  id: number;
  parent: number;
  device_path: string;
  service: number;
  busy_state: number;
  retain_count: number;
  depth: number;
}

export interface IOKitRegistry {
  name: string;
  class: string;
  id: number;
  parent: number;
  busy_state: number;
  retain_count: number;
  depth: number;
}

export interface KernelExtensions {
  idx: number;
  refs: number;
  size: number;
  name: string;
  version: string;
  linked_against: string;
  path: string;
}

export interface KernelPanics {
  path: string;
  time: string;
  registers: string;
  frame_backtrace: string;
  module_backtrace: string;
  dependencies: string;
  name: string;
  os_version: string;
  kernel_version: string;
  system_model: string;
  uptime: number;
  last_loaded: string;
  last_unloaded: string;
}

export interface KeychainAcls {
  keychain_path: string;
  authorizations: string;
  path: string;
  description: string;
  label: string;
}

export interface KeychainItems {
  label: string;
  description: string;
  comment: string;
  account: string;
  created: string;
  modified: string;
  type: string;
  path: string;
}

export interface Launchd {
  path: string;
  name: string;
  label: string;
  program: string;
  run_at_load: string;
  keep_alive: string;
  on_demand: string;
  disabled: string;
  username: string;
  groupname: string;
  stdout_path: string;
  stderr_path: string;
  start_interval: string;
  program_arguments: string;
  watch_paths: string;
  queue_directories: string;
  inetd_compatibility: string;
  start_on_mount: string;
  root_directory: string;
  working_directory: string;
  process_type: string;
}

export interface LaunchdOverrides {
  label: string;
  key: string;
  value: string;
  uid: number;
  path: string;
}

export interface LocationServices {
  enabled: number;
}

export interface ManagedPolicies {
  domain: string;
  uuid: string;
  name: string;
  value: string;
  username: string;
  manual: number;
}

export interface Mdfind {
  path: string;
  query: string;
}

export interface Mdls {
  path: string;
  key: string;
  value: string;
  valuetype: string;
}

export interface NfsShares {
  share: string;
  options: string;
  readonly: number;
}

export interface Nvram {
  name: string;
  type: string;
  value: string;
}

export interface PackageBom {
  filepath: string;
  uid: number;
  gid: number;
  mode: number;
  size: number;
  modified_time: number;
  path: string;
}

export interface PackageInstallHistory {
  package_id: string;
  time: number;
  name: string;
  version: string;
  source: string;
  content_type?: string;
}

export interface PackageReceipt {
  package_id: string;
  package_filename: string;
  version: string;
  location: string;
  install_time: number;
  installer_name: string;
  path: string;
}

export interface PasswordPolicy {
  uid: number;
  policy_identifier: string;
  policy_content: string;
  policy_description: string;
}

export interface PlistEntry {
  key: string;
  subkey: string;
  value: string;
  path: string;
}

export interface PowerSensor {
  key: string;
  category: string;
  name: string;
  value: string;
}

export interface Preferences {
  domain: string;
  key: string;
  subkey: string;
  value: string;
  forced: number;
  username: string;
  host: string;
}

export interface QuickLookCache {
  path: string;
  rowid: number;
  fs_id: number;
  volume_id: number;
  inode: number;
  mtime: number;
  size: number;
  label: string;
  last_hit_date: number;
  hit_count: string;
  icon_mode: number;
  cache_path: string;
}

export interface RunningApps {
  pid: number;
  bundle_identifier: string;
}

export interface SafariExtensions {
  uid: number;
  name: string;
  identifier: string;
  version: string;
  sdk: string;
  update_url: string;
  author: string;
  developer_id: string;
  description: string;
  path: string;
}

export interface Sandboxes {
  label: string;
  user: string;
  enabled: number;
  build_id: string;
  bundle_path: string;
  path: string;
}

export interface ScreenLock {
  enabled: number;
  grace_period: number;
}

export interface SharedFolder {
  path: string;
  name: string;
}

export interface SharingPreferences {
  screen_sharing: number;
  file_sharing: number;
  printer_sharing: number;
  remote_login: number;
  remote_management: number;
  remote_apple_events: number;
  internet_sharing: number;
  bluetooth_sharing: number;
  disc_sharing: number;
  content_caching: number;
}

export interface Signature {
  path: string;
  hash_resources: number;
  arch: string;
  signed: number;
  identifier: string;
  cdhash: string;
  team_identifier: string;
  authority: string;
}

export interface SipConfig {
  config_flag: string;
  enabled: number;
  enabled_nvram: number;
}

export interface SmcKeys {
  key: string;
  type: string;
  size: number;
  value: string;
  hidden: number;
}

export interface SystemExtensions {
  path: string;
  UUID: string;
  state: string;
  identifier: string;
  version: string;
  category: string;
  bundle_path: string;
  team: string;
  mdm_managed: number;
}

export interface TemperatureSensor {
  key: string;
  name: string;
  celcius: number;
  fahrenheit: number;
}

export interface TimeMachineBackup {
  destination_id: string;
  backup_path: number;
}

export interface TimeMachineDestinations {
  alias: string;
  destination_id: string;
  consistency_scan_date: number;
  root_volume_uuid: string;
  bytes_available: number;
  bytes_used: number;
  encryption: number;
}

export interface UnifiedLog {
  timestamp: number;
  storage: number;
  message: string;
  activity: number;
  process: string;
  pid: number;
  sender: string;
  tid: number;
  category: string;
  subsystem: string;
  level: string;
  max_rows: number;
}

export interface UserInteractionEvents {
  time: number;
}

export interface VirtualMemoryInfo {
  free: number;
  active: number;
  inactive: number;
  speculative: number;
  throttled: number;
  wired: number;
  purgeable: number;
  faults: number;
  copy: number;
  zero_fill: number;
  reactivated: number;
  purged: number;
  file_backed: number;
  anonymous: number;
  uncompressed: number;
  compressor: number;
  decompressed: number;
  compressed: number;
  page_ins: number;
  page_outs: number;
  swap_ins: number;
  swap_outs: number;
}

export interface WifiNetworks {
  ssid: string;
  network_name: string;
  security_type: string;
  last_connected: number;
  passpoint: number;
  possibly_hidden: number;
  roaming: number;
  roaming_profile: string;
  auto_login: number;
  temporarily_disabled: number;
  disabled: number;
  add_reason: string;
  added_at: number;
  captive_portal: number;
  captive_login_date: number;
  was_captive_network: number;
  auto_join: number;
  personal_hotspot: number;
}

export interface WifiStatus {
  interface: string;
  ssid: string;
  bssid: string;
  network_name: string;
  country_code: string;
  security_type: string;
  rssi: number;
  noise: number;
  channel: number;
  channel_width: number;
  channel_band: number;
  transmit_rate: string;
  mode: string;
}

export interface WifiSurvey {
  interface: string;
  ssid: string;
  bssid: string;
  network_name: string;
  country_code: string;
  rssi: number;
  noise: number;
  channel: number;
  channel_width: number;
  channel_band: number;
}

export interface XProtectEntries {
  name: string;
  launch_type: string;
  identity: string;
  filename: string;
  filetype: string;
  optional: number;
  uses_pattern: number;
}

export interface XProtectMeta {
  identifier: string;
  type: string;
  developer_id: string;
  min_version: string;
}

export interface XProtectReports {
  name: string;
  user_action: string;
  time: number;
}
