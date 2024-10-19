const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_052.clas.abap
class z2ui5_cl_demo_app_052 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_052';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_052=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_052=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_POPOVER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "U", "parameters": {}},
  "Z2UI5_DISPLAY_VIEW": {"visibility": "U", "parameters": {}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "U", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_052=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_052=>ty_t_table");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_popover = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_product = new abap.types.String({qualifiedName: "STRING"});
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
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let lo_popover = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_popover.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await lo_popover.get().popover({placement: new abap.types.String().set(`Right`), title: abap.operators.concat(new abap.types.String().set(`abap2UI5 - Popover - `),this.mv_product), contentwidth: new abap.types.String().set(`50%`)})).get().simple_form({editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(7).set('Product')})).get().text({text: this.mv_product})).get().label({text: new abap.types.Character(5).set('info2')})).get().text({text: new abap.types.String().set(`this is a text`)})).get().label({text: new abap.types.Character(5).set('info3')})).get().text({text: new abap.types.String().set(`this is a text`)})).get().text({text: new abap.types.String().set(`this is a text`)})).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(7).set('details'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_DETAILS')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await lo_popover.get().stringify()), by_id: id});
  }
  async z2ui5_display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let cont = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(31).set('abap2UI5 - List Report Features'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    page.set((await page.get().dynamic_page({headerexpanded: abap.builtin.abap_true, headerpinned: abap.builtin.abap_true})));
    cont.set((await page.get().content({ns: new abap.types.Character(1).set('f')})));
    tab.set((await cont.get().table({id: new abap.types.String().set(`tab`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_table}))})));
    lo_columns.set((await tab.get().columns()));
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Product`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Date`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Name`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Location`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Quantity`)});
    lo_cells.set((await (await tab.get().items()).get().column_list_item()));
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp1});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${PRODUCT}`), table: temp1});
    await lo_cells.get().link({id: new abap.types.String().set(`link`), text: new abap.types.Character(9).set('{PRODUCT}'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPOVER_DETAIL`), t_arg: temp1}))});
    await lo_cells.get().text({text: new abap.types.String().set(`{CREATE_DATE}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{CREATE_BY}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{STORAGE_LOCATION}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{QUANTITY}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_display_view();
      await this.z2ui5_set_data();
      return;
    }
    let unique252 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique252, new abap.types.String().set(`BUTTON_DETAILS`))) {
      await client.get().z2ui5_if_client$popover_destroy();
    } else if (abap.compare.eq(unique252, new abap.types.String().set(`POPOVER_DETAIL`))) {
      this.mv_check_popover.set(abap.builtin.abap_true);
      this.mv_product.set((await client.get().z2ui5_if_client$get_event_arg({v: abap.IntegerFactory.get(2)})));
      await this.z2ui5_display_popover({id: (await client.get().z2ui5_if_client$get_event_arg({v: abap.IntegerFactory.get(1)}))});
    } else if (abap.compare.eq(unique252, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_set_data() {
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_052=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_052=>ty_t_table");
    let temp4 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_052=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp3);
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('table'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Peter`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(5).set('chair'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp4.get().create_by.set(new abap.types.String().set(`James`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(4).set('sofa'));
    temp4.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp4.get().create_by.set(new abap.types.String().set(`Simone`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(8).set('computer'));
    temp4.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Theo`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(7).set('printer'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().product.set(new abap.types.Character(6).set('table2'));
    temp4.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp4.get().create_by.set(new abap.types.String().set(`Julia`));
    temp4.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp4.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp4, table: temp3});
    this.mt_table.set(temp3);
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_052'] = z2ui5_cl_demo_app_052;
z2ui5_cl_demo_app_052.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_052.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_052.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_052.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_052.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_052.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_052.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_052.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_052.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_052=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_052.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_052=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_052=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_052=>ty_t_table");
export {z2ui5_cl_demo_app_052};
//# sourceMappingURL=z2ui5_cl_demo_app_052.clas.mjs.map