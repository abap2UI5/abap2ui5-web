const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_225.clas.abap
class z2ui5_cl_demo_app_225 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_225';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(43).set('abap2UI5 - Sample: Icon Tab Bar - Separator'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    layout.set((await page.get().label({wrapping: new abap.types.String().set(`true`), text: new abap.types.String().set(`No icon(='') used as separator, the separator will be a vertical line.`), class: new abap.types.String().set(`sapUiSmallMargin`)})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await layout.get().icon_tab_bar({id: new abap.types.String().set(`idIconTabBarSeparatorNoIcon`), expanded: new abap.types.String().set(`false`), class: new abap.types.String().set(`sapUiResponsiveContentPadding`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`info`), icon: new abap.types.String().set(`sap-icon://hint`), iconcolor: new abap.types.String().set(`Neutral`)})).get().text({text: new abap.types.String().set(`Info content goes here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(``)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`attachments`), icon: new abap.types.String().set(`sap-icon://attachment`), iconcolor: new abap.types.String().set(`Neutral`), count: new abap.types.String().set(`3`)})).get().text({text: new abap.types.String().set(`Attachments go here ...`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`notes`), icon: new abap.types.String().set(`sap-icon://notes`), count: new abap.types.String().set(`12`)})).get().text({text: new abap.types.String().set(`Notes go here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(``)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`people`), icon: new abap.types.String().set(`sap-icon://group`), iconcolor: new abap.types.String().set(`Negative`)})).get().text({text: new abap.types.String().set(`People content goes here ...`)});
    await layout.get().label({wrapping: new abap.types.String().set(`true`), text: new abap.types.String().set(`Icon used as separator, you are free to choose an icon you want.`), class: new abap.types.String().set(`sapUiSmallMargin`)});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await layout.get().icon_tab_bar({id: new abap.types.String().set(`idIconTabBarSeparatorIcon`), expanded: new abap.types.String().set(`false`), class: new abap.types.String().set(`sapUiResponsiveContentPadding`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`info`), icon: new abap.types.String().set(`sap-icon://hint`), iconcolor: new abap.types.String().set(`Neutral`)})).get().text({text: new abap.types.String().set(`Info content goes here ...`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`attachments`), icon: new abap.types.String().set(`sap-icon://attachment`), iconcolor: new abap.types.String().set(`Neutral`), count: new abap.types.String().set(`3`)})).get().text({text: new abap.types.String().set(`Attachments go here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(`sap-icon://process`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`notes`), icon: new abap.types.String().set(`sap-icon://notes`), iconcolor: new abap.types.String().set(`Positive`), count: new abap.types.String().set(`12`)})).get().text({text: new abap.types.String().set(`Notes go here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(`sap-icon://process`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`people`), icon: new abap.types.String().set(`sap-icon://group`), iconcolor: new abap.types.String().set(`Negative`)})).get().text({text: new abap.types.String().set(`People content goes here ...`)});
    await layout.get().label({wrapping: new abap.types.String().set(`true`), text: new abap.types.String().set(`Different separators used.`), class: new abap.types.String().set(`sapUiSmallMargin`)});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await layout.get().icon_tab_bar({id: new abap.types.String().set(`idIconTabBarSeparatorMixed`), expanded: new abap.types.String().set(`false`), class: new abap.types.String().set(`sapUiResponsiveContentPadding`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`info`), icon: new abap.types.String().set(`sap-icon://hint`), iconcolor: new abap.types.String().set(`Critical`)})).get().text({text: new abap.types.String().set(`Info content goes here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(``)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`info`), icon: new abap.types.String().set(`sap-icon://attachment`), iconcolor: new abap.types.String().set(`Neutral`), count: new abap.types.String().set(`3`)})).get().text({text: new abap.types.String().set(`Attachments go here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(`sap-icon://vertical-grip`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`notes`), icon: new abap.types.String().set(`sap-icon://notes`), iconcolor: new abap.types.String().set(`Positive`), count: new abap.types.String().set(`12`)})).get().text({text: new abap.types.String().set(`Notes go here ...`)})).get().get_parent()).get().icon_tab_separator({icon: new abap.types.String().set(`sap-icon://process`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`people`), icon: new abap.types.String().set(`sap-icon://group`), iconcolor: new abap.types.String().set(`Negative`)})).get().text({text: new abap.types.String().set(`People content goes here ...`)});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique520 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique520, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_225'] = z2ui5_cl_demo_app_225;
z2ui5_cl_demo_app_225.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_225.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_225.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_225.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_225.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_225.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_225.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_225.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_225};
//# sourceMappingURL=z2ui5_cl_demo_app_225.clas.mjs.map