const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_153.clas.abap
class z2ui5_cl_demo_app_153 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_153';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_STRUC": {"type": () => {return new abap.types.Structure({"data": new abap.types.Structure({"labels": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "datasets": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets")}, "z2ui5_cl_demo_app_153=>ty_data", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_chart", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_STRUC2": {"type": () => {return new abap.types.Structure({"data": new abap.types.Structure({"labels": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "datasets": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets")}, "z2ui5_cl_demo_app_153=>ty_data", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_chart", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_DISPLAY": {"visibility": "U", "parameters": {}},
  "UI5_EVENT": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.ms_struc = new abap.types.Structure({"data": new abap.types.Structure({"labels": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "datasets": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets")}, "z2ui5_cl_demo_app_153=>ty_data", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_chart", undefined, {}, {});
    this.ms_struc2 = new abap.types.Structure({"data": new abap.types.Structure({"labels": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "datasets": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets")}, "z2ui5_cl_demo_app_153=>ty_data", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_chart", undefined, {}, {});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$author = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$author;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$check_sticky === undefined) this.z2ui5_if_app$check_sticky = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async ui5_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case({iv_first_json_upper: abap.builtin.abap_false})), custom_mapper_back: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_to_snake_case())});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await view.get().shell()).get().page({title: new abap.types.Character(18).set('abap2UI5 - Binding'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().button({text: new abap.types.Character(11).set('Rountrip...'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('POPUP')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async ui5_event() {
    let unique408 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique408, new abap.types.Character(5).set('POPUP'))) {
      if (abap.compare.ne(this.ms_struc, this.ms_struc2)) {
        await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`structure changed error`)});
        return;
      }
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`everything works as expected`)});
    } else if (abap.compare.eq(unique408, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let ls_dataset = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.me.get().client.set(client);
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      abap.statements.clear(temp1);
      abap.statements.insertInternal({data: new abap.types.String().set(`Jan`), table: temp1});
      abap.statements.insertInternal({data: new abap.types.String().set(`Feb`), table: temp1});
      abap.statements.insertInternal({data: new abap.types.String().set(`Mar`), table: temp1});
      abap.statements.insertInternal({data: new abap.types.String().set(`Apr`), table: temp1});
      abap.statements.insertInternal({data: new abap.types.String().set(`May`), table: temp1});
      abap.statements.insertInternal({data: new abap.types.String().set(`Jun`), table: temp1});
      this.ms_struc.get().data.get().labels.set(temp1);
      abap.statements.clear(ls_dataset);
      ls_dataset.get().label.set(new abap.types.Character(13).set('Fully Rounded'));
      ls_dataset.get().border_width.set(abap.IntegerFactory.get(2));
      ls_dataset.get().border_radius.set(abap.IntegerFactory.get(200));
      abap.statements.clear(temp3);
      abap.statements.insertInternal({data: new abap.types.String().set(`1`), table: temp3});
      abap.statements.insertInternal({data: new abap.types.String().set(`-12`), table: temp3});
      abap.statements.insertInternal({data: new abap.types.String().set(`19`), table: temp3});
      abap.statements.insertInternal({data: new abap.types.String().set(`3`), table: temp3});
      abap.statements.insertInternal({data: new abap.types.String().set(`5`), table: temp3});
      abap.statements.insertInternal({data: new abap.types.String().set(`-2`), table: temp3});
      abap.statements.insertInternal({data: new abap.types.String().set(`3`), table: temp3});
      ls_dataset.get().data.set(temp3);
      abap.statements.append({source: ls_dataset, target: this.ms_struc.get().data.get().datasets});
      this.ms_struc2.set(this.ms_struc);
      await this.ui5_display();
      return;
    }
    await this.ui5_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_153'] = z2ui5_cl_demo_app_153;
z2ui5_cl_demo_app_153.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_153.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_153.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_153.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_153.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_153.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_153.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_153.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_153.ty_dataset2 = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {});
z2ui5_cl_demo_app_153.ty_dataset = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {});
z2ui5_cl_demo_app_153.ty_datasets = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets");
z2ui5_cl_demo_app_153.ty_data = new abap.types.Structure({"labels": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "datasets": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets")}, "z2ui5_cl_demo_app_153=>ty_data", undefined, {}, {});
z2ui5_cl_demo_app_153.ty_chart = new abap.types.Structure({"data": new abap.types.Structure({"labels": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "datasets": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-LABEL"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-TYPE"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_WIDTH"}), "border_color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_COLOR"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "show_line": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "lvl2": new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-LABEL"}), "data": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "border_width": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_WIDTH"}), "border_radius": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_153=>TY_DATASET2-BORDER_RADIUS"}), "border_skipped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "border_skipped_xfeld": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_153=>ty_dataset2", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_dataset", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_153=>ty_datasets")}, "z2ui5_cl_demo_app_153=>ty_data", undefined, {}, {})}, "z2ui5_cl_demo_app_153=>ty_chart", undefined, {}, {});
export {z2ui5_cl_demo_app_153};
//# sourceMappingURL=z2ui5_cl_demo_app_153.clas.mjs.map