const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_068.clas.abap
class z2ui5_cl_demo_app_068 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_068';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"PRODH_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_nodes");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IS_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_INITIALIZE": {"visibility": "O", "parameters": {}},
  "UI5_DISPLAY_POPUP_TREE_SELECT": {"visibility": "O", "parameters": {}},
  "UI5_DISPLAY_VIEW": {"visibility": "U", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.prodh_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_nodes");
    this.is_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async ui5_display_popup_tree_select() {
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    dialog.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: new abap.types.Character(22).set('Choose Product here...'), contentheight: new abap.types.Character(3).set('50%'), contentwidth: new abap.types.Character(3).set('50%')})));
    await (await (await dialog.get().tree({mode: new abap.types.Character(18).set('SingleSelectMaster'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.prodh_nodes}))})).get().items()).get().standard_tree_item({selected: new abap.types.Character(13).set('{IS_SELECTED}'), title: new abap.types.Character(6).set('{TEXT}')});
    await (await (await dialog.get().buttons()).get().button({text: new abap.types.Character(8).set('Continue'), icon: new abap.types.String().set(`sap-icon://accept`), type: new abap.types.String().set(`Accept`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(8).set('CONTINUE')}))})).get().button({text: new abap.types.Character(6).set('Cancel'), icon: new abap.types.String().set(`sap-icon://decline`), type: new abap.types.String().set(`Reject`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('CANCEL')}))});
    await this.client.get().z2ui5_if_client$popup_display({val: (await dialog.get().stringify())});
  }
  async ui5_display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(34).set('abap2UI5 - Popup Tree select Entry'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await (await (await (await page.get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1680261069535584259`)})).get().link()).get().get_parent();
    await client.get().z2ui5_if_client$view_display({val: (await (await page.get().button({text: new abap.types.Character(18).set('Open Popup here...'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('POPUP_TREE')}))})).get().stringify())});
  }
  async ui5_initialize() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_nodes");
    let temp2 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes");
    let temp4 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes");
    let temp8 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes");
    let temp6 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes");
    let temp10 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().text.set(new abap.types.Character(8).set('Machines'));
    temp2.get().prodh.set(new abap.types.Character(5).set('00100'));
    abap.statements.clear(temp3);
    temp4.get().text.set(new abap.types.Character(5).set('Pumps'));
    temp4.get().prodh.set(new abap.types.Character(10).set('0010000100'));
    abap.statements.clear(temp7);
    temp8.get().text.set(new abap.types.Character(8).set('Pump 001'));
    temp8.get().prodh.set(new abap.types.Character(18).set('001000010000000100'));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().text.set(new abap.types.Character(8).set('Pump 002'));
    temp8.get().prodh.set(new abap.types.Character(18).set('001000010000000105'));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp4.get().nodes.set(temp7);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp2.get().nodes.set(temp3);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.Character(6).set('Paints'));
    temp2.get().prodh.set(new abap.types.Character(5).set('00110'));
    abap.statements.clear(temp5);
    temp6.get().text.set(new abap.types.Character(12).set('Gloss paints'));
    temp6.get().prodh.set(new abap.types.Character(10).set('0011000105'));
    abap.statements.clear(temp9);
    temp10.get().text.set(new abap.types.Character(9).set('Paint 001'));
    temp10.get().prodh.set(new abap.types.Character(18).set('001100010500000100'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().text.set(new abap.types.Character(9).set('Paint 002'));
    temp10.get().prodh.set(new abap.types.Character(18).set('001100010500000105'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp6.get().nodes.set(temp9);
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp2.get().nodes.set(temp5);
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.prodh_nodes.set(temp1);
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.is_initialized, abap.builtin.abap_false)) {
      this.is_initialized.set(abap.builtin.abap_true);
      await this.ui5_initialize();
      await this.ui5_display_view({client: client});
    }
    let unique280 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique280, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique280, new abap.types.Character(10).set('POPUP_TREE'))) {
      await this.ui5_display_popup_tree_select();
    } else if (abap.compare.eq(unique280, new abap.types.Character(8).set('CONTINUE'))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`Selected entry is set in the backend`)});
    } else if (abap.compare.eq(unique280, new abap.types.Character(6).set('CANCEL'))) {
      await client.get().z2ui5_if_client$popup_destroy();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_068'] = z2ui5_cl_demo_app_068;
z2ui5_cl_demo_app_068.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_068.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_068.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_068.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_068.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_068.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_068.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_068.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_068.ty_prodh_node_level3 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {});
z2ui5_cl_demo_app_068.ty_prodh_node_level2 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {});
z2ui5_cl_demo_app_068.ty_prodh_node_level1 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1", undefined, {}, {});
z2ui5_cl_demo_app_068.ty_prodh_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL1-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL2-PRODH"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-TEXT"}), "prodh": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_068=>TY_PRODH_NODE_LEVEL3-PRODH"})}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1-nodes")}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_node_level1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_068=>ty_prodh_nodes");
export {z2ui5_cl_demo_app_068};
//# sourceMappingURL=z2ui5_cl_demo_app_068.clas.mjs.map