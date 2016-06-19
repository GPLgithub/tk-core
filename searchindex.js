Search.setIndex({envversion:47,filenames:["authentication","bootstrap","core","descriptor","index","platform","utils"],objects:{"sgtk.Context":{additional_entities:[2,1,1,""],as_template_fields:[2,2,1,""],create_copy_for_user:[2,2,1,""],entity:[2,1,1,""],entity_locations:[2,1,1,""],filesystem_locations:[2,1,1,""],project:[2,1,1,""],sgtk:[2,1,1,""],shotgun_url:[2,1,1,""],step:[2,1,1,""],task:[2,1,1,""],user:[2,1,1,""]},"sgtk.Hook":{get_publish_path:[2,2,1,""],get_publish_paths:[2,2,1,""],load_framework:[2,2,1,""],parent:[2,1,1,""]},"sgtk.IntegerKey":{format_spec:[2,1,1,""],strict_matching:[2,1,1,""]},"sgtk.Sgtk":{abstract_paths_from_template:[2,2,1,""],configuration_name:[2,1,1,""],context_empty:[2,2,1,""],context_from_entity:[2,2,1,""],context_from_entity_dictionary:[2,2,1,""],context_from_path:[2,2,1,""],create_filesystem_structure:[2,2,1,""],documentation_url:[2,1,1,""],entity_from_path:[2,2,1,""],get_command:[2,2,1,""],list_commands:[2,2,1,""],paths_from_entity:[2,2,1,""],paths_from_template:[2,2,1,""],preview_filesystem_structure:[2,2,1,""],project_path:[2,1,1,""],reload_templates:[2,2,1,""],roots:[2,1,1,""],shotgun:[2,1,1,""],shotgun_url:[2,1,1,""],synchronize_filesystem_structure:[2,2,1,""],template_from_path:[2,2,1,""],version:[2,1,1,""]},"sgtk.SgtkSystemCommand":{category:[2,1,1,""],description:[2,1,1,""],execute:[2,2,1,""],logger:[2,1,1,""],name:[2,1,1,""],parameters:[2,1,1,""],set_logger:[2,2,1,""]},"sgtk.StringKey":{filter_by:[2,1,1,""]},"sgtk.Template":{apply_fields:[2,2,1,""],definition:[2,1,1,""],get_fields:[2,2,1,""],is_optional:[2,2,1,""],keys:[2,1,1,""],missing_keys:[2,2,1,""],parent:[2,1,1,""],validate:[2,2,1,""],validate_and_get_fields:[2,2,1,""]},"sgtk.TemplateKey":{"default":[2,1,1,""],choices:[2,1,1,""],exclusions:[2,1,1,""],is_abstract:[2,1,1,""],labelled_choices:[2,1,1,""],length:[2,1,1,""],name:[2,1,1,""],shotgun_entity_type:[2,1,1,""],shotgun_field_name:[2,1,1,""],str_from_value:[2,2,1,""],validate:[2,2,1,""],value_from_str:[2,2,1,""]},"sgtk.TemplatePath":{parent:[2,1,1,""],root_path:[2,1,1,""]},"sgtk.TemplateString":{parent:[2,1,1,""]},"sgtk.TimestampKey":{format_spec:[2,1,1,""],validate:[2,2,1,""]},"sgtk.authentication":{AuthenticationCancelled:[0,0,1,""],AuthenticationError:[0,0,1,""],DefaultsManager:[0,0,1,""],IncompleteCredentials:[0,0,1,""],ShotgunAuthenticationError:[0,0,1,""],ShotgunAuthenticator:[0,0,1,""],ShotgunUser:[0,0,1,""],deserialize_user:[0,3,1,""],serialize_user:[0,3,1,""]},"sgtk.authentication.DefaultsManager":{get_host:[0,2,1,""],get_http_proxy:[0,2,1,""],get_login:[0,2,1,""],get_user_credentials:[0,2,1,""],is_host_fixed:[0,2,1,""],set_host:[0,2,1,""],set_login:[0,2,1,""]},"sgtk.authentication.ShotgunAuthenticator":{clear_default_user:[0,2,1,""],create_script_user:[0,2,1,""],create_session_user:[0,2,1,""],get_default_host:[0,2,1,""],get_default_http_proxy:[0,2,1,""],get_default_user:[0,2,1,""],get_user:[0,2,1,""],get_user_from_prompt:[0,2,1,""]},"sgtk.authentication.ShotgunUser":{are_credentials_expired:[0,2,1,""],create_sg_connection:[0,2,1,""],host:[0,1,1,""],http_proxy:[0,1,1,""],login:[0,1,1,""],refresh_credentials:[0,2,1,""]},"sgtk.bootstrap":{TankBootstrapError:[1,0,1,""],ToolkitManager:[1,0,1,""]},"sgtk.bootstrap.ToolkitManager":{base_configuration:[1,1,1,""],bootstrap_engine:[1,2,1,""],bundle_cache_fallback_paths:[1,1,1,""],do_shotgun_config_lookup:[1,1,1,""],entry_point:[1,1,1,""],pipeline_configuration:[1,1,1,""],set_progress_callback:[1,2,1,""]},"sgtk.descriptor":{AppDescriptor:[3,0,1,""],ConfigDescriptor:[3,0,1,""],CoreDescriptor:[3,0,1,""],EngineDescriptor:[3,0,1,""],FrameworkDescriptor:[3,0,1,""],TankAppStoreConnectionError:[3,0,1,""],TankAppStoreError:[3,0,1,""],TankDescriptorError:[3,0,1,""],create_descriptor:[3,3,1,""],descriptor_dict_to_uri:[3,3,1,""],descriptor_uri_to_dict:[3,3,1,""]},"sgtk.descriptor.AppDescriptor":{changelog:[3,1,1,""],configuration_schema:[3,1,1,""],copy:[3,2,1,""],deprecation_status:[3,1,1,""],description:[3,1,1,""],display_name:[3,1,1,""],documentation_url:[3,1,1,""],download_local:[3,2,1,""],ensure_local:[3,2,1,""],ensure_shotgun_fields_exist:[3,2,1,""],exists_local:[3,2,1,""],find_latest_version:[3,2,1,""],get_dict:[3,2,1,""],get_location:[3,2,1,""],get_path:[3,2,1,""],get_uri:[3,2,1,""],icon_256:[3,1,1,""],is_dev:[3,2,1,""],is_immutable:[3,2,1,""],required_context:[3,1,1,""],required_frameworks:[3,1,1,""],run_post_install:[3,2,1,""],support_url:[3,1,1,""],supported_engines:[3,1,1,""],supported_platforms:[3,1,1,""],system_name:[3,1,1,""],version:[3,1,1,""],version_constraints:[3,1,1,""]},"sgtk.descriptor.ConfigDescriptor":{associated_core_descriptor:[3,1,1,""],changelog:[3,1,1,""],copy:[3,2,1,""],deprecation_status:[3,1,1,""],description:[3,1,1,""],display_name:[3,1,1,""],documentation_url:[3,1,1,""],download_local:[3,2,1,""],ensure_local:[3,2,1,""],exists_local:[3,2,1,""],find_latest_version:[3,2,1,""],get_dict:[3,2,1,""],get_location:[3,2,1,""],get_path:[3,2,1,""],get_uri:[3,2,1,""],icon_256:[3,1,1,""],is_dev:[3,2,1,""],is_immutable:[3,2,1,""],readme_content:[3,1,1,""],required_storages:[3,1,1,""],support_url:[3,1,1,""],system_name:[3,1,1,""],version:[3,1,1,""],version_constraints:[3,1,1,""]},"sgtk.descriptor.CoreDescriptor":{changelog:[3,1,1,""],copy:[3,2,1,""],deprecation_status:[3,1,1,""],description:[3,1,1,""],display_name:[3,1,1,""],documentation_url:[3,1,1,""],download_local:[3,2,1,""],ensure_local:[3,2,1,""],exists_local:[3,2,1,""],find_latest_version:[3,2,1,""],get_dict:[3,2,1,""],get_location:[3,2,1,""],get_path:[3,2,1,""],get_uri:[3,2,1,""],icon_256:[3,1,1,""],is_dev:[3,2,1,""],is_immutable:[3,2,1,""],support_url:[3,1,1,""],system_name:[3,1,1,""],version:[3,1,1,""],version_constraints:[3,1,1,""]},"sgtk.descriptor.EngineDescriptor":{changelog:[3,1,1,""],configuration_schema:[3,1,1,""],copy:[3,2,1,""],deprecation_status:[3,1,1,""],description:[3,1,1,""],display_name:[3,1,1,""],documentation_url:[3,1,1,""],download_local:[3,2,1,""],ensure_local:[3,2,1,""],ensure_shotgun_fields_exist:[3,2,1,""],exists_local:[3,2,1,""],find_latest_version:[3,2,1,""],get_dict:[3,2,1,""],get_location:[3,2,1,""],get_path:[3,2,1,""],get_uri:[3,2,1,""],icon_256:[3,1,1,""],is_dev:[3,2,1,""],is_immutable:[3,2,1,""],required_context:[3,1,1,""],required_frameworks:[3,1,1,""],run_post_install:[3,2,1,""],support_url:[3,1,1,""],supported_engines:[3,1,1,""],supported_platforms:[3,1,1,""],system_name:[3,1,1,""],version:[3,1,1,""],version_constraints:[3,1,1,""]},"sgtk.descriptor.FrameworkDescriptor":{changelog:[3,1,1,""],configuration_schema:[3,1,1,""],copy:[3,2,1,""],deprecation_status:[3,1,1,""],description:[3,1,1,""],display_name:[3,1,1,""],documentation_url:[3,1,1,""],download_local:[3,2,1,""],ensure_local:[3,2,1,""],ensure_shotgun_fields_exist:[3,2,1,""],exists_local:[3,2,1,""],find_latest_version:[3,2,1,""],get_dict:[3,2,1,""],get_location:[3,2,1,""],get_path:[3,2,1,""],get_uri:[3,2,1,""],icon_256:[3,1,1,""],is_dev:[3,2,1,""],is_immutable:[3,2,1,""],is_shared_framework:[3,2,1,""],required_context:[3,1,1,""],required_frameworks:[3,1,1,""],run_post_install:[3,2,1,""],support_url:[3,1,1,""],supported_engines:[3,1,1,""],supported_platforms:[3,1,1,""],system_name:[3,1,1,""],version:[3,1,1,""],version_constraints:[3,1,1,""]},"sgtk.log":{LogManager:[6,0,1,""]},"sgtk.log.LogManager":{base_file_handler:[6,1,1,""],get_logger:[6,5,1,""],global_debug:[6,1,1,""],initialize_base_file_handler:[6,2,1,""],initialize_custom_handler:[6,2,1,""],log_folder:[6,1,1,""],log_timing:[6,5,1,""],root_logger:[6,1,1,""],uninitialize_base_file_handler:[6,2,1,""]},"sgtk.platform":{Application:[5,0,1,""],Engine:[5,0,1,""],Framework:[5,0,1,""],TankContextChangeNotSupportedError:[5,0,1,""],TankEngineInitError:[5,0,1,""],change_context:[5,3,1,""],current_bundle:[5,3,1,""],current_engine:[5,3,1,""],find_app_settings:[5,3,1,""],get_engine_path:[5,3,1,""],get_framework:[5,3,1,""],get_logger:[5,3,1,""],import_framework:[5,3,1,""],restart:[5,3,1,""],start_engine:[5,3,1,""]},"sgtk.platform.Application":{cache_location:[5,1,1,""],change_context:[5,2,1,""],context:[5,1,1,""],context_change_allowed:[5,1,1,""],description:[5,1,1,""],destroy_app:[5,2,1,""],disk_location:[5,1,1,""],display_name:[5,1,1,""],documentation_url:[5,1,1,""],engine:[5,1,1,""],ensure_folder_exists:[5,2,1,""],execute_hook:[5,2,1,""],execute_hook_by_name:[5,2,1,""],execute_hook_expression:[5,2,1,""],execute_hook_method:[5,2,1,""],frameworks:[5,1,1,""],get_setting:[5,2,1,""],get_setting_from:[5,2,1,""],get_template:[5,2,1,""],get_template_by_name:[5,2,1,""],get_template_from:[5,2,1,""],icon_256:[5,1,1,""],import_module:[5,2,1,""],init_app:[5,2,1,""],instance_name:[5,1,1,""],log_debug:[5,2,1,""],log_error:[5,2,1,""],log_exception:[5,2,1,""],log_info:[5,2,1,""],log_warning:[5,2,1,""],logger:[5,1,1,""],name:[5,1,1,""],post_context_change:[5,2,1,""],post_engine_init:[5,2,1,""],pre_context_change:[5,2,1,""],sgtk:[5,1,1,""],shotgun:[5,1,1,""],style_constants:[5,1,1,""],support_url:[5,1,1,""],tank:[5,1,1,""],version:[5,1,1,""]},"sgtk.platform.Engine":{"_create_dialog":[5,2,1,""],"_create_dialog_with_widget":[5,2,1,""],"_create_widget":[5,2,1,""],"_define_qt_base":[5,2,1,""],"_emit_log_message":[5,2,1,""],"_get_dialog_parent":[5,2,1,""],"_initialize_dark_look_and_feel":[5,2,1,""],"_on_dialog_closed":[5,2,1,""],apps:[5,1,1,""],async_execute_in_main_thread:[5,2,1,""],cache_location:[5,1,1,""],change_context:[5,2,1,""],clear_busy:[5,2,1,""],commands:[5,1,1,""],context:[5,1,1,""],context_change_allowed:[5,1,1,""],created_qt_dialogs:[5,1,1,""],description:[5,1,1,""],destroy:[5,2,1,""],destroy_engine:[5,2,1,""],disk_location:[5,1,1,""],display_name:[5,1,1,""],documentation_url:[5,1,1,""],ensure_folder_exists:[5,2,1,""],environment:[5,1,1,""],execute_hook:[5,2,1,""],execute_hook_by_name:[5,2,1,""],execute_hook_expression:[5,2,1,""],execute_hook_method:[5,2,1,""],execute_in_main_thread:[5,2,1,""],frameworks:[5,1,1,""],get_debug_tracked_qt_widgets:[5,2,1,""],get_matching_commands:[5,2,1,""],get_setting:[5,2,1,""],get_setting_from:[5,2,1,""],get_template:[5,2,1,""],get_template_by_name:[5,2,1,""],get_template_from:[5,2,1,""],has_ui:[5,1,1,""],icon_256:[5,1,1,""],import_module:[5,2,1,""],instance_name:[5,1,1,""],log_debug:[5,2,1,""],log_error:[5,2,1,""],log_exception:[5,2,1,""],log_info:[5,2,1,""],log_warning:[5,2,1,""],logger:[5,1,1,""],metrics_dispatch_allowed:[5,1,1,""],name:[5,1,1,""],panels:[5,1,1,""],post_app_init:[5,2,1,""],post_context_change:[5,2,1,""],pre_app_init:[5,2,1,""],pre_context_change:[5,2,1,""],register_command:[5,2,1,""],register_panel:[5,2,1,""],sgtk:[5,1,1,""],shotgun:[5,1,1,""],show_busy:[5,2,1,""],show_dialog:[5,2,1,""],show_modal:[5,2,1,""],show_panel:[5,2,1,""],style_constants:[5,1,1,""],support_url:[5,1,1,""],tank:[5,1,1,""],version:[5,1,1,""]},"sgtk.platform.Framework":{cache_location:[5,1,1,""],change_context:[5,2,1,""],context:[5,1,1,""],context_change_allowed:[5,1,1,""],description:[5,1,1,""],destroy_framework:[5,2,1,""],disk_location:[5,1,1,""],display_name:[5,1,1,""],documentation_url:[5,1,1,""],engine:[5,1,1,""],ensure_folder_exists:[5,2,1,""],execute_hook:[5,2,1,""],execute_hook_by_name:[5,2,1,""],execute_hook_expression:[5,2,1,""],execute_hook_method:[5,2,1,""],frameworks:[5,1,1,""],get_setting:[5,2,1,""],get_setting_from:[5,2,1,""],get_template:[5,2,1,""],get_template_by_name:[5,2,1,""],get_template_from:[5,2,1,""],icon_256:[5,1,1,""],import_module:[5,2,1,""],init_framework:[5,2,1,""],is_shared:[5,1,1,""],log_debug:[5,2,1,""],log_error:[5,2,1,""],log_exception:[5,2,1,""],log_info:[5,2,1,""],log_warning:[5,2,1,""],logger:[5,1,1,""],name:[5,1,1,""],post_context_change:[5,2,1,""],pre_context_change:[5,2,1,""],sgtk:[5,1,1,""],shotgun:[5,1,1,""],style_constants:[5,1,1,""],support_url:[5,1,1,""],tank:[5,1,1,""],version:[5,1,1,""]},"sgtk.util":{LocalFileStorageManager:[6,0,1,""],ShotgunPath:[6,0,1,""],append_path_to_env_var:[6,3,1,""],create_event_log_entry:[6,3,1,""],download_url:[6,3,1,""],find_publish:[6,3,1,""],get_current_user:[6,3,1,""],get_entity_type_display_name:[6,3,1,""],get_published_file_entity_type:[6,3,1,""],prepend_path_to_env_var:[6,3,1,""],register_publish:[6,3,1,""]},"sgtk.util.LocalFileStorageManager":{get_configuration_root:[6,6,1,""],get_global_root:[6,6,1,""],get_site_root:[6,6,1,""]},"sgtk.util.ShotgunPath":{SHOTGUN_PATH_FIELDS:[6,1,1,""],as_shotgun_dict:[6,2,1,""],as_system_dict:[6,2,1,""],current_os:[6,1,1,""],from_current_os_path:[6,6,1,""],from_shotgun_dict:[6,6,1,""],from_system_dict:[6,6,1,""],get_shotgun_storage_key:[6,5,1,""],join:[6,2,1,""],linux:[6,1,1,""],macosx:[6,1,1,""],windows:[6,1,1,""]},"sgtk.util.filesystem":{copy_file:[6,3,1,""],copy_folder:[6,3,1,""],create_valid_filename:[6,3,1,""],ensure_folder_exists:[6,3,1,""],move_folder:[6,3,1,""],safe_delete_file:[6,3,1,""],touch_file:[6,3,1,""],with_cleared_umask:[6,3,1,""]},sgtk:{Context:[2,0,1,""],Hook:[2,0,1,""],IntegerKey:[2,0,1,""],SequenceKey:[2,0,1,""],Sgtk:[2,0,1,""],SgtkSystemCommand:[2,0,1,""],StringKey:[2,0,1,""],TankError:[2,0,1,""],TankErrorProjectIsSetup:[2,0,1,""],TankFileDoesNotExistError:[2,0,1,""],TankHookMethodDoesNotExistError:[2,0,1,""],TankUnreadableFileError:[2,0,1,""],Template:[2,0,1,""],TemplateKey:[2,0,1,""],TemplatePath:[2,0,1,""],TemplateString:[2,0,1,""],TimestampKey:[2,0,1,""],get_authenticated_user:[2,3,1,""],get_command:[2,3,1,""],get_hook_baseclass:[2,3,1,""],list_commands:[2,3,1,""],log:[6,4,0,"-"],set_authenticated_user:[2,3,1,""],sgtk_from_entity:[2,3,1,""],sgtk_from_path:[2,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","module","Python module"],"5":["py","staticmethod","Python static method"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:function","4":"py:module","5":"py:staticmethod","6":"py:classmethod"},terms:{"001_002":2,"04d":2,"0x10451b690":5,"0x106d9f090":2,"17fedd8":3,"18a7e3":5,"24th":2,"256px":3,"256x256":5,"3beta":3,"3dsmax":5,"__init__":5,"__name__":[5,6],"_create_dialog":5,"_create_dialog_with_widget":5,"_create_widget":5,"_define_qt_bas":5,"_emit_log_messag":[5,6],"_get_dialog_par":5,"_initialize_dark_look_and_feel":5,"_on_dialog_clos":5,"abstract":[2,5,6],"boolean":[2,3,5],"break":5,"case":[0,1,2,3,5,6],"default":[0,1,2,3,5,6],"export":6,"final":5,"float":5,"function":[1,2,3,5,6],"import":[0,1,2,3,4],"int":[2,6],"long":[3,5,6],"new":[0,1,2,3,5,6],"public":[4,5],"return":[0,1,2,3,5,6],"short":[1,2,3,5],"static":6,"switch":[5,6],"true":[0,1,2,3,5,6],"try":2,"var":6,"while":[2,5],aaa:2,abc:2,abil:2,abl:[2,3,5],about:[0,2,3,5,6],abov:[1,2,3,5,6],absenc:3,absolut:0,abstract_paths_from_templ:2,accept:[2,5],access:[0,1],accessor:5,accompani:5,accord:[1,2],account:[2,6],across:[0,1,2,3,5,6],act:[1,5,6],action:2,action_nam:2,actions_hook:2,activ:[2,5,6],actual:[0,2,5],add:[2,5,6],addit:[0,2,3,5,6],additional_ent:2,address:6,adjust:6,admin:2,administr:2,advanc:[1,2,4,5],advantag:5,affect:[1,3,6],after:[0,5],again:0,against:2,agnost:2,ahead:2,all:[0,1,2,3,4,5,6],allow:[0,1,2,3,5,6],along:[0,3],alpha:2,alphanumer:2,alreadi:[0,2,5,6],also:[0,2,3,5,6],alter:6,altern:[0,1,2,6],alwai:[0,1,2,3,4,5,6],amount:5,ani:[0,1,2,3,5,6],anim:2,anm:[2,6],anoth:[0,2],anyth:[1,2],aov:6,api_kei:0,api_script:0,app:[1,2],app_font:5,app_info:2,app_inst:5,app_nam:5,app_stor:[1,3,5],appdata:[3,6],appdialog:5,appear:[5,6],append:6,append_path_to_env_var:6,appli:[3,6],applic:[0,1,2,4],apply_field:2,approach:[1,6],appropri:[2,5],approv:3,arbitrari:5,are_credentials_expir:0,area:[2,5],aren:2,arg:5,argument:[2,5,6],around:[0,1,2,6],as_context_field:2,as_shotgun_dict:6,as_system_dict:6,as_template_field:2,ascii:2,ask:[0,5],aspect:5,assembl:2,asset:[1,2,5],associ:[0,1,2,3,5,6],associated_core_descriptor:3,assum:[2,3,6],assumpt:5,async_execute_in_main_thread:5,attach:[2,3,5,6],attempt:[1,2,5,6],authenticatedus:0,authenticationcancel:0,authenticationerror:0,automat:[0,2,5,6],avaial:2,avail:[0,2,3,5,6],avoid:[1,2,4],awai:[5,6],back:[0,1,2,6],backbon:3,backend:0,background:[2,5],backward:[3,4,5,6],bad_path:2,bake:[1,2,3],bar:[5,6],base:[0,1,2,3,5,6],base_configur:1,base_file_handl:6,base_url:2,basi:[0,4,6],basic:[0,2,3,5,6],bat:6,batch:5,baz:6,bbb:2,becaus:[2,5,6],becom:[0,1],been:[0,1,2,3,5,6],befor:[2,5],begin:[5,6],behavior:[0,1,2,5],behind:[1,2],belong:[0,2,5],below:[0,4,5,6],benefit:5,best:[2,6],betgween:5,better:5,between:[0,1,2,5,6],binari:2,blank:1,block:[1,5],bool:[2,5],bootstrap:0,bootstrap_engin:1,both:[2,3,5],branch:2,bridg:5,brief:2,broadcast:5,broken:6,brows:0,browserwidget:5,build:[2,5],built:[0,2,5],bundl:[1,3,5,6],bundle_cach:3,bundle_cache_fallback_path:1,bundle_cache_root:3,bundle_cache_root_overrid:3,bundle_nam:5,busi:[1,2,5],button:5,c8c8c8:5,cach:[0,1,2,3,5,6],cache_app:2,cache_loc:5,call:[0,1,2,5,6],callabl:2,callback:[1,2,5],can:[0,1,2,3,5,6],cancel:[0,5],cannot:[0,5],capabl:5,captur:[2,6],car:2,care:3,carri:[0,2],cast:[2,6],categori:2,central:[0,2,6],certain:[0,2,5,6],chain:2,chang:[0,1,3,4,5,6],change_context:5,changelog:3,changelog_summari:3,changelog_url:3,charact:6,check:[0,2,3,5],choic:2,classmethod:6,clean:5,cleaner:4,clear:[0,2,6],clear_busi:5,clear_cach:2,clear_default_us:0,click:5,client:0,clone:5,clone_configur:2,close:5,cloud:[3,6],cluster:[2,6],cmd:2,code:[0,1,2,3,4,5,6],collect:[2,3,5,6],color:5,com:[0,2,3,5,6],combin:[4,5],come:[0,2,5,6],command:[0,1],command_nam:2,command_selector:5,comment:6,commit:3,common:2,commun:5,comp:2,compact:3,company_item_act:6,compar:[2,3],comparison:3,compat:[3,4,5,6],complet:[1,2,5,6],complex:[2,5],compon:[2,5],comput:[1,2],concaten:[2,6],concept:[0,2,6],concurr:2,config:[1,2,3,5,6],configur:[1,2,3,5,6],configuraiton:6,configuration_nam:2,configuration_schema:3,conjunct:[2,3,5],connect:[0,1,2,3,5,6],consider:[2,5],consist:[2,5,6],consol:[0,2,5,6],constant:[5,6],constrain:3,constraint:3,constraint_pattern:3,construct:[0,1,2,3,5,6],constructor:[0,2,5],consum:0,conta:1,contain:[0,1,2,3,5,6],content:[2,3],content_typ:6,context_additional_ent:2,context_change_allow:5,context_empti:[2,5],context_from_ent:2,context_from_entity_dictionari:2,context_from_path:2,context_menu:5,continu:[2,3],control:[0,2,3,5,6],conveni:[2,5,6],convent:[1,2,5],convers:2,convert:0,copi:[2,3,5,6],copied_ctx:2,copy_fil:6,copy_fold:6,copytre:6,core:[0,1],core_v17:6,core_v18:6,correct:[2,5],correctli:[2,3,5],correspond:[2,5],could:[0,1,2,3,5,6],coupl:[2,5],cover:5,creat:[0,1,2,3,5,6],create_copy_for_us:2,create_descriptor:3,create_event_log_entri:6,create_filesystem_structur:2,create_fold:6,create_placeholder_fil:6,create_script_us:0,create_session_us:0,create_sg_connect:[0,3],create_valid_filenam:6,created_at:6,created_bi:6,created_qt_dialog:5,creation:[2,5],credenti:[0,6],css:5,ctx:[2,5,6],curat:1,curr_scen:5,curr_ver:5,current:[0,1,2,3,5,6],current_bundl:5,current_engin:[2,5],current_index:1,current_o:6,custom:[0,1,2,3,5,6],customentity03:6,customiz:6,cut:5,dark:5,darwin:[2,6],dat:5,data:[0,1,2,5,6],date:[2,6],datetim:6,dcc:[0,1,2,5],ddict:3,deadlock:5,deal:[2,5],debug:5,decid:0,decor:6,deep:5,deeper:4,def:[2,5,6],default_valu:2,defaults_manag:0,defer:2,defin:[0,1,2,3,5,6],definit:[2,5],degre:5,delet:6,demo:6,demo_project:[2,6],demo_project_1:2,demonstr:5,depart:2,depend:[2,5,6],dependency_id:6,dependency_path:6,deploy:3,deprec:[2,3,5],deprecation_statu:3,deriv:[0,2,3,5],desc:3,describ:[2,3,5],descript:[2,3,5,6],descriptor:1,descriptor_dict_to_uri:3,descriptor_typ:3,descriptor_uri_to_dict:3,deseri:0,deserialize_us:0,design:[2,3,5],desir:[2,5],desktop:[0,1],despit:6,destin:6,destroi:5,destroy_app:5,destroy_engin:5,destroy_framework:5,detail:[1,2,4,5,6],determin:[2,3,5],develop:[1,3,4,5,6],dialog:[0,5,6],dialog_bas:5,dialog_clos:5,dict:[1,2,3,5,6],dict_or_uri:3,dictionari:[0,1,2,3,5,6],differ:[0,1,2,3,5,6],direct:2,directli:[0,1,2,5],directori:[2,3,6],dirk:2,disk:[0,1,2,3,5,6],disk_loc:5,dispatch:[0,5,6],displai:[0,3,5,6],display_nam:[3,5],distinguish:[5,6],distribut:[1,2,3],dlg:5,do_shotgun_config_lookup:1,do_stuff:2,doc:6,document:[0,2,3,4,5],documentation_url:[2,3,5],doe:[0,1,2,5,6],doesn:[0,1,2,3,5,6],don:[0,2,5,6],done:[1,2,5,6],double_backet:5,down:[2,5,6],download:[1,3,6],download_loc:3,download_url:6,drive:3,driven:5,dst:6,due:[0,5],dure:[1,3],dynam:2,each:[0,2,3,4,5,6],earli:6,earlier:6,easi:[0,1,2,3,5,6],easier:[2,4],easiest:[2,6],easili:[0,3,5,6],ecosystem:5,effect:[0,6],effici:5,eight:2,either:[0,2,3,4],element:2,elif:2,els:2,email:6,embed:5,emit:[5,6],empti:[2,3,5,6],enabl:[5,6],encapsul:[0,1,5,6],encod:2,end:[3,5,6],engin:[1,2,3,4],engine_instance_nam:5,engine_nam:[1,5],enough:2,ensur:[0,2,3,5,6],ensure_folder_exist:[5,6],ensure_loc:3,ensure_shotgun_fields_exist:3,enter:0,entir:1,entiti:[1,2,3,6],entity_dictionari:2,entity_from_path:2,entity_id:2,entity_loc:2,entity_tre:6,entity_typ:[2,3,5],entity_type_cod:6,entri:[0,1,2,5,6],entry_point:[1,6],env:[5,6],env_var_nam:6,environ:[1,2,3,5,6],environment_nam:5,equival:[2,3,5],error:[1,2,3,5,6],especi:5,establish:[0,2,3,6],etc:[0,2,3,5,6],even:[2,5],event:[5,6],event_typ:6,everi:6,everywher:2,evolv:4,exactli:2,exampl:[0,1,2,3,5,6],exclus:2,execut:1,execute_hook:5,execute_hook_by_nam:5,execute_hook_express:5,execute_hook_method:[2,5],execute_in_main_thread:5,exeuct:3,exist:[1,2,3,5,6],exists_loc:3,exit:5,exit_cod:5,expect:2,experi:[0,2],expir:0,explain:6,explicit:[0,1,2],explicitli:[0,5],expos:[2,5],express:[2,5],exr:2,ext:6,extend:[2,5],extens:[1,3,5,6],extern:3,extract:[0,2],fabric:2,fail:[1,2],failur:[5,6],fall:[0,1,2],fallback:[1,3],fallback_root:3,fals:[0,1,2,3,5,6],famili:5,farm:0,fashion:[3,5,6],fc6246:5,featur:[3,5],feel:5,fetch:[3,5],few:[0,5],field:[0,2,3,6],file:[0,1,2,3,4,5],file_path:6,filehandl:6,filenam:6,filesystem:[2,5],filesystem_loc:2,filesystemloc:2,fill:0,filter:[2,6],filter_bi:2,find:[2,4,5,6],find_app_set:5,find_latest_vers:3,find_publish:6,finish:5,first:[0,2,3,6],first_pass_lgt:2,firstnam:6,fix:[0,1,2,5,6],flag:[1,3,6],flavor:2,flexibl:[1,3,5],flow:0,fly:5,fnt:5,focu:5,folder:[2,3,5,6],folder_permiss:6,follow:[0,1,2,3,5,6],font:5,foo:[2,6],foo_bar:5,foo_bar_modul:5,forbidden:2,forc:[1,5],form:[1,2,3,4,5,6],format:[0,2,3,5],format_spec:2,formatt:5,forward:[3,5],found:[0,1,2,3,5,6],four:2,frame:2,frame_rang:5,framework:[1,2,3,4],framework_instance_nam:2,frameworkname_versionpattern:2,free:5,fresh:5,friendli:5,from:[0,1,2,3,4,5],from_current_os_path:6,from_shotgun_dict:6,from_system_dict:6,full:[2,4,5,6],full_sync:2,fulli:[2,5],func:[5,6],fundament:[1,2],further:[3,5,6],furthermor:6,futur:[1,2,3,5],gener:[0,2,3,4,5],gentli:2,get:[0,1,2,3,5,6],get_authenticated_us:[0,2],get_command:2,get_configuration_root:6,get_current_us:6,get_debug_tracked_qt_widget:5,get_default_host:0,get_default_http_proxi:0,get_default_us:0,get_dict:3,get_engine_path:5,get_entity_type_display_nam:6,get_field:2,get_framework:5,get_global_root:6,get_host:0,get_http_proxi:0,get_loc:3,get_logg:[5,6],get_login:0,get_matching_command:5,get_path:3,get_publish_path:2,get_published_file_entity_typ:6,get_set:5,get_setting_from:5,get_shotgun_storage_kei:6,get_site_root:6,get_templ:5,get_template_by_nam:5,get_template_from:5,get_uri:3,get_us:[0,3],get_user_credenti:0,get_user_from_prompt:0,git:2,git_branch:3,github:[0,2,3,5],give:[2,6],given:[0,1,2,3,5,6],global:[2,3,5],global_debug:6,glue:2,goal:5,good:[0,2,3,5],good_path:2,grab:[1,5,6],gracefulli:[0,5],grant:0,granular:2,great:3,group:[1,6],guarante:[1,5],had:5,hand:2,handi:[2,6],handl:[0,1,2,3,5,6],handler:[2,5,6],happen:[0,1,2,5,6],has_ui:5,hash:3,have:[0,1,2,3,5,6],headless:0,heart:2,height:2,heirarchi:6,hello:5,help:[0,2,6],helper:[3,5,6],henc:[2,5],henri:2,here:[2,3,5,6],hide:5,hide_tk_title_bar:5,hierarchi:[2,5],high:[2,5],highest:3,hint:2,hold:2,home:3,hook_express:5,hook_nam:5,hook_path:2,hookbaseclass:2,host:[0,1,5],hostnam:6,houdini:[2,6],hour:0,how:[0,2,3,5,6],howev:[0,2,3,5,6],html:6,http:[0,2,3,5,6],http_proxi:0,human:0,humanus:[2,6],icon:3,icon_256:[3,5],idea:5,ident:[3,5],identifi:[0,2,5,6],ignor:[2,6],ignore_typ:2,illustr:[1,6],ilter:6,imag:[2,6],imagin:[2,5],immedi:5,immut:3,impl:0,implement:[0,2,3,5,6],implicitli:2,import_framework:5,import_modul:[2,5,6],import_plugin:2,improv:6,inact:0,inbetween:0,includ:[2,3,5,6],include_empti:6,incomplet:[0,2],incompletecredenti:0,increment:2,index:1,indic:[0,1,2,3,5,6],individu:[0,5],info:[2,3,5,6],inform:[0,2,3,4,5,6],inherit:2,init:5,init_app:5,init_framework:5,initi:[1,2,5,6],initial_pass:2,initialis:5,initialize_base_file_handl:6,initialize_custom_handl:6,input:2,input_path:2,insert:2,insid:[1,2,3,4],instal:[1,2,3,5,6],install_app:2,install_engin:2,instanc:[0,1,2,3,5,6],instance_nam:5,instanti:[0,5,6],instead:[0,1,2,5,6],instruct:2,int_kei:2,integ:[2,6],integr:[2,4,5,6],intellig:2,intend:[1,2,3,4,5,6],intent:5,interact:0,interest:5,interfac:[4,5,6],interfer:6,intern:[0,4,5],internal_action_object:2,interpret:5,introduc:[1,5,6],introspect:2,invalid:0,invoc:[0,6],invok:[2,5],involv:1,io_descriptor:3,is_abstract:2,is_deprec:3,is_dev:3,is_host_fix:0,is_immut:3,is_opt:2,is_shar:5,is_shared_framework:3,isn:[1,2],issu:[2,6],item:[0,1,2,3,5,6],itself:[0,2,5,6],job:0,john:[2,6],join:[5,6],jpeg:6,jump:2,june:2,just:[2,3,5],keep:[0,5],kei:[0,1,2,3,5,6],kept:2,key_nam:2,kind:1,know:[2,3],known:6,kwarg:[5,6],label:2,labelled_choic:2,larg:[2,6],lastli:2,lastnam:6,latenc:6,later:6,latest:[1,3],latest_desc:3,launch:[0,1,2,4],layer:[2,6],layout:[5,6],leaf:5,least:[2,6],leav:2,left:[1,2],legaci:[2,5,6],length:2,less:5,let:[2,5],level:[2,4,5,6],librari:[2,3,5,6],library_v1:2,lifetim:5,light:[2,5],like:[0,2,5,6],limit:[2,6],line:[0,3],link:[2,6],link_typ:6,linux2:[2,6],linux:[3,6],linux_path:[3,6],list:[1,2,3,5,6],list_act:2,list_command:2,list_of_path:6,littl:0,live:[3,5],load:[0,1,2,5],load_framework:2,local:[2,3,5,6],local_path:6,local_path_linux:6,local_path_mac:6,local_path_window:6,local_storag:6,localstorag:6,locat:[1,2,3,5],log:[0,2,3,4,5],log_debug:[5,6],log_error:[5,6],log_except:5,log_fold:6,log_info:[5,6],log_nam:6,log_tim:6,log_warn:5,log_xxx:6,logger:[2,5,6],loghandl:5,logic:[0,1,2,3,4,5,6],login:[0,6],logrecord:5,longer:[0,3],look:[0,1,2,3,5,6],lookup:[1,2,3],loop:[1,5],loosevers:3,loss:6,lot:6,love:6,low:2,lower:2,mac:[3,5,6],mac_path:[3,6],machin:2,macosx:[3,6],macosx_path:6,mai:[0,1,2,3,5,6],main:[0,2,5,6],main_scen:2,mainscen:2,maintain:[0,1,3,5],mainten:2,make:[0,1,2,3,4,5,6],makedir:6,manag:0,mani:[2,5],manifest:[2,3,5],manipul:[1,2,6],manner:2,manual:6,map:[2,6],mark:[2,6],mask:6,master:[3,5],match:[0,1,2,3,5,6],max_asset_work:2,max_index:1,maximum:5,maya:[0,1,2,3,5,6],maya_act:2,maya_asset_project:2,maya_shot_publish:2,maya_work:2,mayaact:2,mean:[0,1,2,3,5,6],meant:[0,5,6],mechan:[2,5],member:5,menu:[2,5,6],menu_favourit:5,messag:[1,2,3,5],metadata:[3,6],method:[0,1],method_nam:5,metric:5,metrics_dispatch_allow:5,mgr:1,might:6,min_cor:3,min_desktop:3,min_engin:3,min_sg:3,mind:5,minimum:5,miscellan:4,miss:[1,2],missing_kei:2,mnt:2,modal:5,mode:5,model:2,modeless:5,modul:[0,1,2,4,5,6],module_nam:5,module_obj:5,moment:0,monitor:0,more:[0,1,2,3,5,6],most:[0,2,3,5],mount:2,move:[2,6],move_fold:6,msg:[0,5],msg_str:5,much:[2,6],multi:[2,3,5,6],multipl:[0,1,5,6],must:[0,2,5],my_hook:5,my_lovely_nam:6,my_method:6,my_proj:2,my_project:2,my_shotgun_publish_method:6,myapp:2,mybrows:5,mybundl:5,myhost:0,myscript:0,mysit:2,mystudio:2,mystuff:5,mywidget:5,name:[0,1,2,3,5,6],namespac:[5,6],necessari:[1,2,5],necessarili:5,need:[0,1,2,3,5,6],nest:5,never:3,new_context:5,newli:[5,6],next:0,nice:5,non:[1,2,3,5,6],none:[0,1,2,3,5,6],normal:[0,2,3,5,6],note:[1,2,3,5,6],noth:[5,6],notion:0,now:[0,1,2,5],nuke:[0,1,2,3,5,6],nuke_asset_rend:2,nukepublish:5,number:[1,2,3,5,6],object:[0,1,2,3,5,6],obtain:5,obtrus:1,occur:2,off:6,offer:2,offici:4,often:[2,3,5],old:[2,5],old_context:5,older:3,omit:[0,3,6],on_cancel_button_click:5,on_ok_button_click:5,onc:[0,1,2,5],onli:[0,1,2,3,4,5,6],open:[5,6],openurl:2,oper:[0,1,2,3,5,6],optim:2,option:[0,2,3,5,6],order:[0,1,2,3,5],org:[3,6],organ:[2,6],origin:2,oserror:6,other:[1,2,5],other_set:5,otherwis:[0,2,3,5,6],our:[2,3,5],out:[0,2,5,6],outlin:[1,5],output:[2,5,6],over:[0,1,3,5,6],overrid:[0,1,3,5,6],overridden:5,overriden:5,overview:2,own:[2,3,5,6],p123:6,p123c33:6,packag:[1,3,4],pad:2,page:[2,3],pair:[2,3],palett:5,panel:5,panel_id:5,panel_nam:5,param1:5,param2:5,param:[0,2,5],paramet:[0,1,2,3,5,6],parameter_nam:2,parent:[2,5,6],pars:2,part:[0,1,2,3,5,6],particular:[2,3,5,6],particularli:[0,6],pass:[0,1,2,3,5,6],password:0,path:[1,2],path_cach:6,path_to:3,path_typ:6,paths_from_ent:2,paths_from_templ:2,pattern:[2,3,5,6],payload:[0,3,5,6],per:[2,3,5,6],per_platform_root:2,percentag:1,perforce_v1:2,perform:[2,3,6],period:[0,1],perman:6,permiss:[2,3,6],persist:[0,5,6],person:0,phase:5,pick:[0,1,2,5,6],pickl:0,piec:1,pipelin:[0,1,2,3],pipeline_config_id:6,pipeline_configur:1,pipelineconfigur:3,pixel:5,place:[2,3,5,6],placehold:6,plastiqu:5,platform:[1,2,3,5,6],pleas:[0,1,3,5],plug:2,plugin:[1,6],png:[3,5,6],point:[0,1,2,3,5,6],pointer:5,pop:[0,5],popul:[0,2,5,6],portabilti:5,portabl:5,possibl:[0,1,2,3,4,5,6],post:3,post_app_init:5,post_context_chang:5,post_engine_init:5,post_instal:3,potenti:[2,5],power:2,practic:[3,5,6],pre:[0,1,3,5],pre_app_init:5,pre_check:5,pre_context_chang:5,precis:5,predetermin:0,prefer:[5,6],prepend:6,prepend_path_to_env_var:6,present:[0,2,5],preserv:2,pretti:5,prevent:2,preview:2,preview_filesystem_structur:2,previou:[2,6],previous:6,previous_context:2,primari:[1,2,3,6],primit:1,print:5,prior:[2,3,6],privat:[3,5,6],probabl:5,probe:5,problem:[5,6],proce:5,process:[0,1,2,5,6],produc:0,product:2,profil:5,progress:[1,5],progress_callback:1,proj:2,project:0,project_id:[3,5,6],project_path:2,project_root:[2,5],prompt:[0,1,6],propag:6,properli:5,properti:[1,2,5,6],protect:2,provid:[0,1,2,4,5,6],provider_servic:1,proxi:[0,6],pub:2,publish:[0,1,2,3,5,6],published_file_typ:[2,6],publishedfil:6,pull:5,purpos:[1,3],push:[5,6],pyqt:5,pysid:5,python:[0,2,5,6],qapplic:5,qdesktopservic:2,qdialog:5,qmessagebox:5,qpalett:5,qss:5,qt_core:5,qt_gui:5,qtcore:[2,5],qtgui:[2,5],queri:[2,3,5,6],quit:5,qurl:2,qwidget:5,rais:[0,2,5,6],random:5,rapid:5,rather:[0,2,3,5],raw:6,reach:5,read:[0,2,3,5,6],readabl:6,readm:3,readme_cont:3,realis:2,reason:[0,2,3],recent:3,recip:6,recommend:[1,2,3,4,5,6],reconstruct:2,record:[3,5,6],recurs:[2,6],reduc:6,refactor:4,referenc:5,reflect:2,refresh:0,refresh_credenti:0,regardless:[2,3,6],regex:2,regist:[2,5,6],register_command:5,register_panel:5,register_publish:6,registr:5,regular:[0,4],reject:[0,5],relai:2,relat:[1,2,3,4],relationship:2,releas:[3,6],relev:[2,5],reload:[2,5],reload_templ:2,remain:[4,5],rememb:0,remot:[0,1,3],remotehost:3,remov:[0,1,5,6],render:[0,2,6],render_1:2,render_2:2,render_3:2,render_tim:2,renew:0,replac:[5,6],repo:3,report:[1,3],repositori:[3,5],repres:[0,2,3,5,6],represent:[2,3,6],request:[0,2,5],requir:[1,2,3,5,6],required_context:3,required_core_uri:3,required_field:2,required_framework:3,required_storag:3,requires_shotgun_field:3,reserv:5,reset:6,resid:[3,5],resolut:[1,2,3,6],resolv:[1,2,3,5,6],resolve_latest:3,resolve_latest_base_configur:1,resourc:[1,5],respond:6,rest:5,restart:5,restor:5,restrict:[5,6],result:[2,3,5,6],resultset:6,retain:6,retriev:[0,2,3,5,6],return_cod:5,return_valu:2,reus:5,review:1,rig:2,right:[2,5,6],root:[2,3,5,6],root_logg:6,root_path:2,rotat:6,routin:5,rule:4,run:[0,1,2,5,6],run_act:2,run_post_instal:3,runtim:[1,2,5,6],rv_review:[1,6],rwx:6,safe:5,safe_delete_fil:6,safeti:5,sai:0,same:[0,1,2,5,6],sampl:0,sandbox:[1,2,3],sanit:6,save:5,scenario:[0,2,5,6],scene:[0,1,2,6],schema:[2,3],scope:[1,6],screen:[5,6],scripe:2,script:0,script_kei:0,script_us:0,seal:6,seamless:[0,5],seamlessli:5,search:[2,3],second:2,section:[1,2,3,5],secur:0,see:[0,1,2,3,5,6],select:[2,5],selector:5,self:[2,5],semant:3,semver:3,send:[2,5],sent:0,separ:[0,2],seq:2,seq_1:2,seq_kei:2,sequenc:[2,5,6],seri:[2,5,6],serial:[0,3],serializ:0,serialize_us:0,server:[0,2],servic:2,session:[0,1,2,5,6],session_token:0,sessionus:0,set:[0,1,2,3,5,6],set_authenticated_us:[0,2],set_host:0,set_logg:2,set_login:0,set_progress_callback:1,setup_project:[1,2],sever:[1,2,3,5,6],sg_alert_color:5,sg_asset_typ:2,sg_auth:3,sg_config:3,sg_connect:3,sg_data:2,sg_dict:6,sg_field:6,sg_foreground_color:5,sg_highlight_color:5,sg_movie_typ:3,sg_publish_data:2,sg_publish_data_list:2,sg_user:1,sgtk:[0,1],sgtk_from_ent:[1,2],sgtk_from_path:[1,2,5],sgtk_publish:1,share:[1,3,5],shell:5,short_nam:5,shortcut:5,shorthand:5,shot:[2,5,6],shot_010:6,shot_2:2,shotgun:[0,1,2],shotgun_asset_chang:6,shotgun_asset_new:6,shotgun_authent:4,shotgun_entity_field:2,shotgun_entity_typ:2,shotgun_field_nam:2,shotgun_path_field:6,shotgun_url:2,shotgun_user_login:6,shotgunauthenticationerror:0,shotgunsit:6,shotgunsoftwar:[0,5],shotgunstudio:[0,2,6],shotgunutils_v1:2,should:[0,1,2,3,5,6],show:[2,3,5,6],show_busi:5,show_dialog:5,show_global_busi:5,show_in_sg:2,show_mod:5,show_panel:5,shown:[3,5,6],shut:5,shutdown:5,shutil:6,side:1,sign:0,signal:5,signatur:1,similar:[2,5,6],simpl:[0,5,6],simpli:[0,1,2,5,6],sinc:[2,5,6],singl:[0,2,3,5,6],singleton:6,site:[0,1,3,6],sitenam:5,sitori:3,situat:6,skip:[2,6],skip_default:2,skip_kei:2,skip_list:6,skip_missing_optional_kei:2,slash:3,slow:5,slower:2,small:5,smith:6,snapshot:5,snippet:[2,5],snow:2,softwar:4,some:[0,2,5,6],some_method:2,some_modul:2,somehook:2,someon:[2,6],someth:[0,2,3,5,6],sometim:[2,4,5,6],somewher:5,sort:6,sourc:[0,1,2,3,5,6],space:[2,6],speak:5,special:[1,2,5,6],specif:[0,2,3,5,6],specifi:[0,1,2,3,5,6],speed:5,splash:5,split:2,squar:3,src:6,ssh:3,stabil:5,stage:5,standard:[0,1,2,3,5],start:[0,1,5,6],start_engin:[2,5,6],starter:5,starterapp:5,startup:[1,5],state:[5,6],statement:5,statist:6,statu:[3,5,6],std:[2,3,5,6],stderr:6,stdin:0,stdout:0,step:[1,2,3],stereo:2,stgk:[5,6],still:2,sting:6,stop:5,stopwatch:6,storag:[0,2,3,6],store:[0,1,2],stored_query_data_path:5,str:2,str_from_valu:2,str_kei:2,str_valu:2,straight:1,stream:6,strftime:2,strict_match:2,string:[0,1,2,3,5,6],strongli:[2,5],structur:[2,4,5],studio:[1,2,3,5,6],studio_root:2,studioname_vrtool:1,style:[2,5,6],style_const:5,stylesheet:5,sub:6,subclass:[0,2,5,6],sublcass:5,subsequ:5,subset:3,subtre:2,success:[0,5],successfulli:6,suffici:6,suggest:[0,5,6],suit:1,suitabl:[2,3,5,6],summar:0,summari:5,suppli:[0,2,3,6],support:[2,3,5],support_url:[3,5],supported_engin:3,supported_platform:3,suppos:5,sure:[0,1,2,3,5],svn:6,sync:2,synchron:2,synchronize_filesystem_structur:2,synchronize_fold:2,syntax:[2,3,5],system:[0,1],system_dict:6,system_nam:3,tag:3,tag_list:6,take:[1,2,3,5,6],taken:2,tank:[0,1],tank_cmd:6,tank_command:2,tankappstoreconnectionerror:3,tankappstoreerror:3,tankbootstraperror:1,tankcontextchangenotsupportederror:5,tankdescriptorerror:3,tankengineiniterror:5,tankerror:[2,6],tankerrorprojectissetup:2,tankfiledoesnotexisterror:2,tankhookmethoddoesnotexisterror:2,tankpublishedfil:6,tankqdialog:5,tankunreadablefileerror:2,target:[1,3,6],target_fold:3,task:[2,3,5,6],team:1,tear:5,technic:4,tell:[0,2],temp:6,templ:2,template_from_path:2,template_nam:5,template_obj:2,template_path:2,template_str:2,temporarili:6,tend:5,termin:5,test:[2,3],text:3,textur:2,than:[0,2,3,5],thei:[0,1,2,3,5,6],them:[2,5,6],theme:5,themselv:5,therebi:6,therefor:[0,4],thi:[0,1,2,3,4,5,6],thing:[5,6],those:2,though:5,thousand:2,thread:[2,5],threadloc:2,threadsaf:2,three:[2,6],through:[2,5,6],thrown:0,thumbnail:6,thumbnail_path:6,time:[0,1,2,3,5,6],timeout:0,timestamp:2,timestamp_kei:2,timezon:2,titl:5,tk_debug:6,tk_multi_myapp:5,tk_multi_mybundl:5,tk_multi_workfil:6,tkimp63c3b2d57f85:6,tmp:6,togeth:[1,2],toggl:6,token:[0,2,3,6],too:5,tool:[0,2,5,6],toolkit:0,toolkitmanag:0,tooltip:5,top:[2,5,6],total:1,touch:6,touch_fil:6,track:[0,1,3,5,6],tradition:[2,6],translat:[2,3],transpar:2,transport:3,trap:0,treat:2,tree:2,tri:0,tricki:5,trigger:[2,5],tupl:[3,5],turn:2,tweak:2,two:[1,2,3,5],type:[0,1,2],typic:[0,1,2,3,5,6],umask:6,under:[5,6],underli:5,underscor:6,uniniti:6,uninitialize_base_file_handl:6,uniqu:[0,1,3,5],unless:[2,3],until:5,updat:[0,2,3,5],update_entity_thumbnail:6,update_task_thumbnail:6,upgrad:[2,5],upload:6,upon:[2,3,5],uri:3,url:[2,3,5,6],usag:[3,6],user:[0,1,2,3,5,6],usernam:0,usual:[0,2,3,6],utc:2,utc_now:2,v001:[2,6],v002:2,v003:2,v12:3,vagu:2,valid:[0,2,5],validate_and_get_field:2,validate_with:2,valu:[0,1,2,3,5,6],value_from_str:2,vari:[2,5],variabl:[2,3,6],varieti:2,variou:[0,1,5,6],verbos:6,veri:2,verifi:5,version:[1,2,3,5,6],version_constraint:3,version_ent:6,version_numb:6,via:[0,1,2,4,5,6],wai:[0,1,2,5,6],wait:5,want:[0,1,2,3,5,6],warn:[5,6],wasn:2,web:3,weight:5,welcom:4,well:[0,2,4,5,6],were:[1,2,6],weren:2,what:[0,2,3,5,6],whatev:[1,2],when:[0,2,3,5,6],whenev:[0,1,2,4,5,6],where:[0,1,2,3,5,6],whether:[2,3,5,6],which:[0,1,2,3,5,6],who:[0,4],whom:2,whose:2,why:2,widget:[3,5],widget_class:5,widget_obj:5,widget_v0:2,width:2,wiki:0,win32:[2,6],win:6,window:[3,5,6],windows_path:[3,6],wish:5,with_cleared_umask:6,within:5,without:[0,2,5,6],won:[5,6],work:[0,2,3,5,6],work_area_info:5,worker:5,workfil:5,workfiles2:6,workflow:[1,2,4,5],workspac:[2,6],worri:[0,5,6],would:[0,1,2,3,5,6],wrap:[0,2,5],wrapper:[5,6],writabl:6,write:[0,1,2,5,6],written:[5,6],xxxxx:0,yaml:5,yet:[2,5],yield:2,yml:[2,3,5],you:[0,1,2,3,4,5,6],your:[0,1,2,3,4],yourself:5,zero:2},titles:["Authentication","Deploy and management","Foundation","Descriptor API","Shotgun pipeline Toolkit Core reference, v0.18.0RC2","Apps, Engines and Frameworks","Utilities"],titleterms:{"0rc2":4,"class":[0,1],"import":5,access:[2,5],api:[0,2,3,4,6],app:[3,5,6],appdescriptor:3,applic:5,authent:[0,2],backend:6,bootstrap:1,branch:3,command:2,configdescriptor:3,consum:6,content:4,context:2,core:[2,4,6],coredescriptor:3,dcc:6,debug:6,defaultsmanag:0,deploi:1,descriptor:3,dev:3,engin:[5,6],enginedescriptor:3,except:[0,1,2,3,5],execut:2,extern:6,factori:[2,3],file:6,filesystem:6,foundat:2,framework:[5,6],frameworkdescriptor:3,from:6,gener:6,get_hook_baseclass:2,git:3,global:6,hierarchi:6,hook:2,insid:[5,6],integerkei:2,introduct:0,launch:5,localfilestoragemanag:6,locat:6,log:6,logmanag:6,manag:1,messag:6,method:[2,3,5],miscellan:6,other:6,path:3,pipelin:4,project:1,refer:[0,3,4],relat:6,script:6,sequencekei:2,setup:1,sgtk:[2,6],sgtksystemcommand:2,shotgun:[3,4,6],shotgunauthent:0,shotgunpath:6,shotgunus:0,standard:6,store:3,stringkei:2,system:[2,6],tabl:4,tank:2,templat:2,templatekei:2,templatepath:2,templatestr:2,timestampkei:2,toolkit:[1,2,4,5,6],toolkitmanag:1,tradit:1,type:3,util:[0,6],within:6,your:[5,6]}})