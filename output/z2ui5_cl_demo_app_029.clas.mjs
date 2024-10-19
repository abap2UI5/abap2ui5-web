const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_029.clas.abap
class z2ui5_cl_demo_app_029 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_029';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TAB_RADIAL_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"RENDER_TAB_RADIAL": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_tab_radial_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async render_tab_radial() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let container = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    container.set((await (await (await view.get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - Visualization'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().tab_container()));
    grid.set((await (await container.get().tab({text: new abap.types.Character(12).set('Radial Chart'), selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_tab_radial_active}))})).get().grid({default_span: new abap.types.Character(16).set('XL12 L12 M12 S12')})));
    await grid.get().link({text: new abap.types.Character(45).set('Go to the SAP Demos for Radial Charts here...'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(137).set('https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.microchart.RadialMicroChart/sample/sap.suite.ui.microchart.sample.RadialMicroChart')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await grid.get().vertical_layout()).get().horizontal_layout()).get().radial_micro_chart({size: new abap.types.Character(1).set('M'), percentage: new abap.types.Character(2).set('45'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')}))})).get().radial_micro_chart({size: new abap.types.Character(1).set('S'), percentage: new abap.types.Character(2).set('45'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')}))})).get().get_parent()).get().horizontal_layout()).get().radial_micro_chart({size: new abap.types.Character(1).set('M'), percentage: new abap.types.Character(4).set('99.9'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')})), valuecolor: new abap.types.Character(4).set('Good')})).get().radial_micro_chart({size: new abap.types.Character(1).set('S'), percentage: new abap.types.Character(4).set('99.9'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')})), valuecolor: new abap.types.Character(4).set('Good')})).get().get_parent()).get().horizontal_layout()).get().radial_micro_chart({size: new abap.types.Character(1).set('M'), percentage: new abap.types.Character(1).set('0'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')})), valuecolor: new abap.types.Character(5).set('Error')})).get().radial_micro_chart({size: new abap.types.Character(1).set('S'), percentage: new abap.types.Character(1).set('0'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')})), valuecolor: new abap.types.Character(5).set('Error')})).get().get_parent()).get().horizontal_layout()).get().radial_micro_chart({size: new abap.types.Character(1).set('M'), percentage: new abap.types.Character(3).set('0.1'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')})), valuecolor: new abap.types.Character(8).set('Critical')})).get().radial_micro_chart({size: new abap.types.Character(1).set('S'), percentage: new abap.types.Character(3).set('0.1'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('RADIAL_PRESS')})), valuecolor: new abap.types.Character(8).set('Critical')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.render_tab_radial();
    }
    let unique224 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique224, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_029'] = z2ui5_cl_demo_app_029;
z2ui5_cl_demo_app_029.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_029.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_029.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_029.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_029.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_029.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_029.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_029.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_029};
//# sourceMappingURL=z2ui5_cl_demo_app_029.clas.mjs.map