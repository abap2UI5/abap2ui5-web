const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_298.clas.abap
class z2ui5_cl_demo_app_298 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_298';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LT_A_PRODUCTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_298=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_298=>temp1_aa49f476de");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTEDPRODUCTERRORCOLLECTION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTEDPRODUCTWRNNGCOLLECTION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTEDPRODUCTSCCSSCOLLECTION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTEDPRODUCTINFORCOLLECTION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.lt_a_products = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_298=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_298=>temp1_aa49f476de");
    this.selectedproducterrorcollection = new abap.types.String({qualifiedName: "STRING"});
    this.selectedproductwrnngcollection = new abap.types.String({qualifiedName: "STRING"});
    this.selectedproductsccsscollection = new abap.types.String({qualifiedName: "STRING"});
    this.selectedproductinforcollection = new abap.types.String({qualifiedName: "STRING"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page_01 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Sample: Select - Validation states`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page_01.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page_01.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(95).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.Select/sample/sap.m.sample.SelectValueState')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().page({showheader: abap.builtin.abap_false})).get().content()).get().hbox({class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().label({text: new abap.types.String().set(`Error state`), labelfor: new abap.types.String().set(`errorSelect`), class: new abap.types.String().set(`sapUiTinyMarginEnd sapUiTinyMarginTop`)})).get().select({id: new abap.types.String().set(`errorSelect`), forceselection: abap.builtin.abap_true, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selectedproducterrorcollection})), valuestate: new abap.types.String().set(`Error`), valuestatetext: new abap.types.String().set(`error value state text`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_a_products}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})).get().get_parent()).get().get_parent()).get().hbox({class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().label({text: new abap.types.String().set(`Warning state`), labelfor: new abap.types.String().set(`warningSelect`), class: new abap.types.String().set(`sapUiTinyMarginEnd sapUiTinyMarginTop`)})).get().select({id: new abap.types.String().set(`warningSelect`), forceselection: abap.builtin.abap_true, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selectedproductwrnngcollection})), valuestate: new abap.types.String().set(`Warning`), valuestatetext: new abap.types.String().set(`This is a Level 1 explanation. The items Lorem and Ipsum are not recommended from the system.`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_a_products}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})).get().get_parent()).get().get_parent()).get().hbox({class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().label({text: new abap.types.String().set(`Success state`), labelfor: new abap.types.String().set(`successSelect`), class: new abap.types.String().set(`sapUiTinyMarginEnd sapUiTinyMarginTop`)})).get().select({id: new abap.types.String().set(`successSelect`), forceselection: abap.builtin.abap_true, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selectedproductsccsscollection})), valuestate: new abap.types.String().set(`Success`), valuestatetext: new abap.types.String().set(`success value state text`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_a_products}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})).get().get_parent()).get().get_parent()).get().hbox({class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().label({text: new abap.types.String().set(`Information state`), labelfor: new abap.types.String().set(`informationSelect`), class: new abap.types.String().set(`sapUiTinyMarginEnd sapUiTinyMarginTop`)})).get().select({id: new abap.types.String().set(`informationSelect`), forceselection: abap.builtin.abap_true, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selectedproductinforcollection})), valuestate: new abap.types.String().set(`Information`), valuestatetext: new abap.types.String().set(`information value state text`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_a_products}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})).get().get_parent()).get().get_parent()).get().get_parent();
    await client.get().z2ui5_if_client$view_display({val: (await page_01.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique595 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique595, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique595, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`Visualizes the validation state of the control, for example, Error, Warning and Success.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
      await this.z2ui5_set_data();
    }
    await this.on_event({client: client});
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_298=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_298=>temp1_aa49f476de");
    let temp2 = new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_298=>ty_product_collection", undefined, {}, {});
    abap.statements.clear(this.selectedproducterrorcollection);
    abap.statements.clear(this.selectedproductwrnngcollection);
    abap.statements.clear(this.selectedproductsccsscollection);
    abap.statements.clear(this.selectedproductinforcollection);
    abap.statements.clear(this.lt_a_products);
    this.selectedproducterrorcollection.set(new abap.types.String().set(`HT-998`));
    this.selectedproductwrnngcollection.set(new abap.types.String().set(`HT-999`));
    this.selectedproductsccsscollection.set(new abap.types.String().set(`HT-1000`));
    this.selectedproductinforcollection.set(new abap.types.String().set(`HT-1007`));
    abap.statements.clear(temp1);
    temp2.get().product_id.set(new abap.types.Character(6).set('HT-998'));
    temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 11'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(6).set('HT-999'));
    temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 13'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1000'));
    temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 15'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1001'));
    temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 17'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1002'));
    temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 18'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1003'));
    temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 19'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1007'));
    temp2.get().name.set(new abap.types.Character(11).set('ITelO Vault'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1008'));
    temp2.get().name.set(new abap.types.Character(24).set('Notebook Professional 11'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1009'));
    temp2.get().name.set(new abap.types.Character(24).set('Notebook Professional 13'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1010'));
    temp2.get().name.set(new abap.types.Character(24).set('Notebook Professional 15'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1011'));
    temp2.get().name.set(new abap.types.Character(24).set('Notebook Professional 17'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1012'));
    temp2.get().name.set(new abap.types.Character(24).set('Notebook Professional 19'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1020'));
    temp2.get().name.set(new abap.types.Character(15).set('ITelO Vault Net'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1021'));
    temp2.get().name.set(new abap.types.Character(15).set('ITelO Vault SAT'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1022'));
    temp2.get().name.set(new abap.types.Character(12).set('Comfort Easy'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product_id.set(new abap.types.Character(7).set('HT-1023'));
    temp2.get().name.set(new abap.types.Character(14).set('Comfort Senior'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.lt_a_products.set(temp1);
    abap.statements.sort(this.lt_a_products,{by: [{component: "name"}]});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_298'] = z2ui5_cl_demo_app_298;
z2ui5_cl_demo_app_298.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_298.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_298.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_298.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_298.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_298.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_298.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_298.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_298.ty_product_collection = new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_298=>ty_product_collection", undefined, {}, {});
z2ui5_cl_demo_app_298.temp1_aa49f476de = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_298=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_298=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_298=>temp1_aa49f476de");
export {z2ui5_cl_demo_app_298};
//# sourceMappingURL=z2ui5_cl_demo_app_298.clas.mjs.map