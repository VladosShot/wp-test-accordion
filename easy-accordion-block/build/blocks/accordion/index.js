(() => {
    var e,
        t = {
            95: (e, t, a) => {
                "use strict";
                const r = window.wp.element,
                    o = window.wp.blocks,
                    n = JSON.parse(
                        '{"apiVersion":2,"name":"esab/accordion","version":"0.1.0","title":"Accordion","category":"esab-blocks","description":"Easy Accordion allows you to create an accordion or faqs section easily.","supports":{"html":false,"anchor":false,"customClassName":false},"keywords":["accordion","faq","accordion block"],"example":{"attributes":{"heading":"Accordion Heading"}},"providesContext":{"esab/accordionBorderWidth":"accordionBorderWidth","esab/accordionBorderColor":"accordionBorderColor","esab/accordionBorderStyle":"accordionBorderStyle","esab/enableBoxShadow":"enableBoxShadow","esab/boxShadowPalette":"boxShadowPalette","esab/headingTag":"headingTag","esab/headerSeparator":"headerSeparator","esab/headerSeparatorColor":"headerSeparatorColor","esab/headerSeparatorHeight":"headerSeparatorHeight","esab/headerSeparatorStyle":"headerSeparatorStyle","esab/headerTopPadding":"headerTopPadding","esab/headerBottomPadding":"headerBottomPadding","esab/headerLeftPadding":"headerLeftPadding","esab/headerRightPadding":"headerRightPadding","esab/enableLinkedHeaderPadding":"enableLinkedHeaderPadding","esab/linkedHeaderPadding":"linkedHeaderPadding","esab/bodyTopPadding":"bodyTopPadding","esab/bodyBottomPadding":"bodyBottomPadding","esab/bodyLeftPadding":"bodyLeftPadding","esab/bodyRightPadding":"bodyRightPadding","esab/enableLinkedBodyPadding":"enableLinkedBodyPadding","esab/linkedBodyPadding":"linkedBodyPadding","esab/iconPosition":"iconPosition","esab/collapsedIcon":"collapsedIcon","esab/expandedIcon":"expandedIcon","esab/headingColor":"headingColor","esab/headerBg":"headerBg","esab/bodyBg":"bodyBg"},"attributes":{"uniqueId":{"type":"string"},"accordionsGap":{"type":"number","default":10},"marginTop":{"type":"string","default":"0"},"marginBottom":{"type":"string","default":"0"},"marginLeft":{"type":"string","default":"0"},"marginRight":{"type":"string","default":"0"},"enableLinkedMargin":{"type":"boolean","default":false},"linkedMargin":{"type":"string","default":"0"},"accordionBorderWidth":{"type":"number","default":1},"accordionBorderStyle":{"type":"string","default":"solid"},"accordionBorderPopOver":{"type":"boolean","default":false},"accordionBorderColor":{"type":"string","default":"#E0E0E0"},"accordionActiveBorderPopOver":{"type":"boolean","default":false},"accordionActiveBorderColor":{"type":"string","default":"#3fa796"},"accordionBorderRadius":{"type":"number","default":3},"enableBoxShadow":{"type":"boolean","default":false},"boxShadowPalette":{"type":"string","default":"bs__one"},"customColorsPallete":{"type":"boolean","default":false},"headingTag":{"type":"string","default":"p"},"headingColorPopOver":{"type":"boolean","default":false},"headingColor":{"type":"string"},"headingActiveColorPopOver":{"type":"boolean","default":false},"headingActiveColor":{"type":"string","default":"#3fa796"},"headerBgPopOver":{"type":"boolean","default":false},"headerBg":{"type":"string"},"headerActiveBgPopOver":{"type":"boolean","default":false},"headerActiveBg":{"type":"string","default":"#f0fffd"},"headerTopPadding":{"type":"string","default":"10"},"headerBottomPadding":{"type":"string","default":"10"},"headerLeftPadding":{"type":"string","default":"10"},"headerRightPadding":{"type":"string","default":"10"},"enableLinkedHeaderPadding":{"type":"boolean","default":false},"linkedHeaderPadding":{"type":"string","default":"10"},"headerSeparator":{"type":"boolean","default":true},"headerSeparatorPopOver":{"type":"boolean","default":false},"headerSeparatorColor":{"type":"string","default":"#E0E0E0"},"headerSeparatorHeight":{"type":"number","default":1},"headerSeparatorStyle":{"type":"string","default":"solid"},"activeSeparatorPopOver":{"type":"boolean","default":false},"activeSeparatorColor":{"type":"string","default":"#3fa796"},"iconSize":{"type":"number","default":20},"iconPosition":{"type":"boolean","default":false},"collapsedIcon":{"type":"string","default":"esab__circle_plus"},"expandedIcon":{"type":"string","default":"esab__circle_minus"},"activeIconPopOver":{"type":"boolean","default":false},"activeIconColor":{"type":"string","default":"#3fa796"},"inactiveIconPopOver":{"type":"boolean","default":false},"inactiveIconColor":{"type":"string"},"bodyBgPopOver":{"type":"boolean","default":false},"bodyBg":{"type":"string"},"bodyActiveBgPopOver":{"type":"boolean","default":false},"bodyActiveBg":{"type":"string","default":"#f0fffd"},"bodyTopPadding":{"type":"string","default":"10"},"bodyBottomPadding":{"type":"string","default":"10"},"bodyLeftPadding":{"type":"string","default":"10"},"bodyRightPadding":{"type":"string","default":"10"},"enableLinkedBodyPadding":{"type":"boolean","default":false},"linkedBodyPadding":{"type":"string","default":"10"},"zindex":{"type":"number"},"customClass":{"type":"string"},"anchorId":{"type":"string"}},"textdomain":"easy-accordion-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'
                    );
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = window.wp.i18n,
                    c = window.wp.blockEditor,
                    s = window.wp.components,
                    d = {
                        esab__plus: (0, r.createElement)(
                            "svg",
                            { version: "1.2", viewBox: "0 0 24 24", width: "24", height: "24" },
                            (0, r.createElement)("path", { d: "m11.3 3.6h1.4q0.2 0 0.2 0.1v16.6q0 0.1-0.2 0.1h-1.4q-0.2 0-0.2-0.2v-16.5q0-0.1 0.2-0.1z" }),
                            (0, r.createElement)("path", { d: "m4.1 11.1h15.8q0.2 0 0.2 0.2v1.4q0 0.2-0.2 0.2h-15.8q-0.2 0-0.2-0.2v-1.4q0-0.2 0.2-0.2z" })
                        ),
                        esab__minus: (0, r.createElement)("svg", { version: "1.2", viewBox: "0 0 24 24", width: "24", height: "24" }, (0, r.createElement)("path", { d: "m3.4 11.1h17.2v1.8h-17.2z" })),
                        esab__circle_plus: (0, r.createElement)(
                            "svg",
                            { version: "1.2", viewBox: "0 0 48 48", width: "48", height: "48" },
                            (0, r.createElement)("rect", {
                                fill: "#F3F5F6", rx: "24", width: "48", height: "48"
                            }),
                            (0, r.createElement)("path", {
                                fillRule: "evenodd",
                                fill: "black",
                                d: "M25 17H23V23H17V25H23V31H25V25H31V23H25V17Z",
                            }),
                            
                        ),
                        esab__circle_minus: (0, r.createElement)(
                            "svg",
                            { version: "1.2", viewBox: "0 0 48 48", width: "48", height: "48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            (0, r.createElement)("rect", {
                                width: "48",
                                height: "48",
                                rx: "24",
                                fill: "black"
                            }),
                            (0, r.createElement)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M29.6569 19.7574L28.2426 18.3432L24 22.5859L19.7574 18.3432L18.3431 19.7574L22.5858 24.0001L18.3431 28.2427L19.7574 29.6569L24 25.4143L28.2426 29.6569L29.6569 28.2427L25.4142 24.0001L29.6569 19.7574Z",
                                fill: "white" 
                            })
                        ),
                        esab__filled_circle_plus: (0, r.createElement)(
                            "svg",
                            { version: "1.2", viewBox: "0 0 24 24", width: "24", height: "24" },
                            (0, r.createElement)("path", {
                                fillRule: "evenodd",
                                d:
                                    "m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm6.7-12c0-0.5-0.4-0.9-0.9-0.9h-4.9v-4.6c0-0.5-0.4-1-0.9-1-0.5 0-0.9 0.5-0.9 1v4.6h-4.9c-0.5 0-0.9 0.4-0.9 0.9 0 0.5 0.4 0.9 0.9 0.9h4.9v5.1c0 0.5 0.4 0.9 0.9 0.9 0.5 0 0.9-0.4 0.9-0.9v-5.1h4.9c0.5 0 0.9-0.4 0.9-0.9z",
                            })
                        ),
                        esab__filled_circle_minus: (0, r.createElement)(
                            "svg",
                            { version: "1.2", viewBox: "0 0 24 24", width: "24", height: "24" },
                            (0, r.createElement)("path", {
                                fill: "white",
                                d: "M29.6569 19.7574L28.2426 18.3432L24 22.5859L19.7574 18.3432L18.3431 19.7574L22.5858 24.0001L18.3431 28.2427L19.7574 29.6569L24 25.4143L28.2426 29.6569L29.6569 28.2427L25.4142 24.0001L29.6569 19.7574Z",
                            })
                        ),
                        esab__times: (0, r.createElement)(
                            "svg",
                            { width: "24px", height: "24px", viewBox: "0 0 24 24" },
                            (0, r.createElement)("path", {
                                d: "M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z",
                            })
                        ),
                        esab__circle_times: (0, r.createElement)(
                            "svg",
                            { version: "1.2", viewBox: "0 0 24 24", width: "24", height: "24" },
                            (0, r.createElement)("path", {
                                fillRule: "evenodd",
                                d:
                                    "m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm10.2-12c0-5.6-4.6-10.2-10.2-10.2-5.6 0-10.2 4.6-10.2 10.2 0 5.6 4.6 10.2 10.2 10.2 5.6 0 10.2-4.6 10.2-10.2zm-10.2-1.3l3.5-3.5 1.3 1.3-3.5 3.5 3.5 3.5-1.3 1.3-3.5-3.5-3.5 3.5-1.3-1.3 3.5-3.5-3.5-3.5 1.3-1.3z",
                            })
                        ),
                        esab__arrow_up: (0, r.createElement)(
                            "svg",
                            { version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 47.255 47.255" },
                            (0, r.createElement)("path", {
                                d:
                                    "M46.255,35.941c-0.256,0-0.512-0.098-0.707-0.293l-21.921-21.92l-21.92,21.92c-0.391,0.391-1.023,0.391-1.414,0\r c-0.391-0.391-0.391-1.023,0-1.414L22.92,11.607c0.391-0.391,1.023-0.391,1.414,0l22.627,22.627c0.391,0.391,0.391,1.023,0,1.414\r C46.767,35.844,46.511,35.941,46.255,35.941z",
                            })
                        ),
                        esab__arrow_down: (0, r.createElement)(
                            "svg",
                            { version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 512 512" },
                            (0, r.createElement)("path", {
                                d:
                                    "M505.752,123.582c-8.331-8.331-21.839-8.331-30.17,0L256,343.163L36.418,123.582c-8.331-8.331-21.839-8.331-30.17,0\r s-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667\r C514.083,145.42,514.083,131.913,505.752,123.582z",
                            })
                        ),
                    },
                    { Fragment: p } = wp.element;
                (0, o.registerBlockType)("esab/accordion-child", {
                    title: (0, l.__)("Accordion", "easy-accordion-block"),
                    description: (0, l.__)("Acts as Child Block for Easy Accordion Block", "easy-accordion-block"),
                    usesContext: [
                        "esab/accordionBorderWidth",
                        "esab/accordionBorderColor",
                        "esab/accordionBorderStyle",
                        "esab/enableBoxShadow",
                        "esab/boxShadowPalette",
                        "esab/headingTag",
                        "esab/headerSeparator",
                        "esab/headerSeparatorColor",
                        "esab/headerSeparatorHeight",
                        "esab/headerSeparatorStyle",
                        "esab/headerTopPadding",
                        "esab/headerBottomPadding",
                        "esab/headerLeftPadding",
                        "esab/headerRightPadding",
                        "esab/enableLinkedHeaderPadding",
                        "esab/linkedHeaderPadding",
                        "esab/bodyTopPadding",
                        "esab/bodyBottomPadding",
                        "esab/bodyLeftPadding",
                        "esab/bodyRightPadding",
                        "esab/enableLinkedBodyPadding",
                        "esab/linkedBodyPadding",
                        "esab/collapsedIcon",
                        "esab/expandedIcon",
                        "esab/iconPosition",
                        "esab/headingColor",
                        "esab/headerBg",
                        "esab/bodyBg",
                    ],
                    icon: {
                        src: (0, r.createElement)(
                            "svg",
                            { width: "24", height: "24" },
                            (0, r.createElement)("g", null, (0, r.createElement)("rect", { stroke: "#3fa796", id: "svg_1", height: "6.16667", width: "21.5", y: "8.91667", x: "1.25", fill: "#fff" }))
                        ),
                    },
                    supports: { html: !1, anchor: !1, customClassName: !1 },
                    category: "esab-blocks",
                    parent: ["esab/accordion"],
                    attributes: {
                        active: { type: "boolean", default: !1 },
                        accordionBorderWidth: { type: "number", default: 1 },
                        accordionBorderColor: { type: "string", default: "#E0E0E0" },
                        accordionBorderStyle: { type: "string", default: "solid" },
                        enableBoxShadow: { type: "boolean", default: !1 },
                        boxShadowPalette: { type: "string", default: "bs__one" },
                        heading: { type: "string" },
                        headingColor: { type: "string" },
                        headingTag: { type: "string" },
                        headerBg: { type: "string" },
                        headerSeparator: { type: "boolean", default: !1 },
                        headerSeparatorColor: { type: "string", default: "#E0E0E0" },
                        headerSeparatorHeight: { type: "number", default: 1 },
                        headerSeparatorStyle: { type: "string", default: "solid" },
                        headerTopPadding: { type: "string", default: "10" },
                        headerBottomPadding: { type: "string", default: "10" },
                        headerLeftPadding: { type: "string", default: "10" },
                        headerRightPadding: { type: "string", default: "10" },
                        enableLinkedHeaderPadding: { type: "boolean", default: !1 },
                        linkedHeaderPadding: { type: "string", default: "10" },
                        bodyTopPadding: { type: "string", default: "10" },
                        bodyBottomPadding: { type: "string", default: "10" },
                        bodyLeftPadding: { type: "string", default: "10" },
                        bodyRightPadding: { type: "string", default: "10" },
                        enableLinkedBodyPadding: { type: "boolean", default: !1 },
                        linkedBodyPadding: { type: "string", default: "10" },
                        bodyBg: { type: "string" },
                        collapsedIcon: { type: "string" },
                        expandedIcon: { type: "string" },
                        iconPosition: { type: "boolean", default: !1 },
                    },
                    edit: (e) => {
                        let { attributes: t, setAttributes: a, context: o, className: n } = e;
                        const {
                            active: i,
                            accordionBorderWidth: u,
                            accordionBorderColor: h,
                            accordionBorderStyle: g,
                            enableBoxShadow: b,
                            boxShadowPalette: f,
                            heading: m,
                            headingColor: y,
                            headingTag: v,
                            headerBg: _,
                            iconPosition: k,
                            collapsedIcon: C,
                            expandedIcon: S,
                            headerSeparator: P,
                            headerSeparatorColor: w,
                            headerSeparatorHeight: E,
                            headerSeparatorStyle: x,
                            headerTopPadding: B,
                            headerBottomPadding: A,
                            headerLeftPadding: O,
                            headerRightPadding: I,
                            enableLinkedHeaderPadding: $,
                            linkedHeaderPadding: R,
                            bodyTopPadding: T,
                            bodyBottomPadding: z,
                            bodyLeftPadding: N,
                            bodyRightPadding: L,
                            enableLinkedBodyPadding: H,
                            linkedBodyPadding: j,
                            bodyBg: M,
                        } = t;
                        return (
                            a({
                                accordionBorderWidth: o["esab/accordionBorderWidth"],
                                accordionBorderColor: o["esab/accordionBorderColor"],
                                accordionBorderStyle: o["esab/accordionBorderStyle"],
                                enableBoxShadow: o["esab/enableBoxShadow"],
                                boxShadowPalette: o["esab/boxShadowPalette"],
                                headingTag: o["esab/headingTag"],
                                iconPosition: o["esab/iconPosition"],
                                collapsedIcon: o["esab/collapsedIcon"],
                                expandedIcon: o["esab/expandedIcon"],
                                headerSeparator: o["esab/headerSeparator"],
                                headerSeparatorColor: o["esab/headerSeparatorColor"],
                                headerSeparatorHeight: o["esab/headerSeparatorHeight"],
                                headerSeparatorStyle: o["esab/headerSeparatorStyle"],
                                headerTopPadding: o["esab/headerTopPadding"],
                                headerBottomPadding: o["esab/headerBottomPadding"],
                                headerLeftPadding: o["esab/headerLeftPadding"],
                                headerRightPadding: o["esab/headerRightPadding"],
                                enableLinkedHeaderPadding: o["esab/enableLinkedHeaderPadding"],
                                linkedHeaderPadding: o["esab/linkedHeaderPadding"],
                                bodyTopPadding: o["esab/bodyTopPadding"],
                                bodyBottomPadding: o["esab/bodyBottomPadding"],
                                bodyLeftPadding: o["esab/bodyLeftPadding"],
                                bodyRightPadding: o["esab/bodyRightPadding"],
                                enableLinkedBodyPadding: o["esab/enableLinkedBodyPadding"],
                                linkedBodyPadding: o["esab/linkedBodyPadding"],
                                headingColor: o["esab/headingColor"],
                                headerBg: o["esab/headerBg"],
                                bodyBg: o["esab/bodyBg"],
                            }),
                            (0, r.createElement)(
                                p,
                                null,
                                (0, r.createElement)(
                                    c.InspectorControls,
                                    null,
                                    (0, r.createElement)(
                                        s.PanelBody,
                                        { title: (0, l.__)("Accordion Status", "easy-accordion-block") },
                                        (0, r.createElement)(s.ToggleControl, {
                                            label: (0, l.__)("Active on Load", "easy-accordion-block"),
                                            checked: i,
                                            onChange: () => a({ active: !i }),
                                            help: i && (0, l.__)("You have made it Active on Load", "easy-accordion-block"),
                                        })
                                    )
                                ),
                                (0, r.createElement)(
                                    "div",
                                    { className: `${n} ${b ? f : ""} ${i ? "esab__active_accordion" : ""}`, style: { border: `${u}px ${g} ${h}` } },
                                    (0, r.createElement)(
                                        "div",
                                        {
                                            className: "esab__head" + (k ? " esab__head_reverse" : ""),
                                            style: { padding: $ ? `${R}px` : `${B}px ${I}px ${A}px ${O}px`, backgroundColor: _ || "transparent" },
                                            role: "button",
                                            "aria-expanded": i,
                                        },
                                        (0, r.createElement)(
                                            "div",
                                            { className: "esab__heading_txt" },
                                            (0, r.createElement)(c.RichText, {
                                                tagName: v,
                                                className: "esab__heading_tag",
                                                value: m,
                                                onChange: (e) => a({ heading: e }),
                                                placeholder: (0, l.__)("heading….", "easy-accordion-block"),
                                                allowedFormats: ["core/bold", "core/italic"],
                                                style: { color: y },
                                            })
                                        ),
                                        (0, r.createElement)("div", { className: "esab__icon" }, (0, r.createElement)("div", { className: "esab__collapse" }, d[C]), (0, r.createElement)("div", { className: "esab__expand" }, d[S]))
                                    ),
                                    (0, r.createElement)(
                                        "div",
                                        { className: "esab__body", style: { borderTop: P ? `${E}px ${x} ${w}` : "none", padding: H ? `${j}px` : `${T}px ${L}px ${z}px ${N}px`, backgroundColor: M || "transparent" } },
                                        (0, r.createElement)(c.InnerBlocks, { allowedBlocks: !0, template: [["core/paragraph", { placeholder: (0, l.__)("type content or press / to add block..", "easy-accordion-block") }]] })
                                    )
                                )
                            )
                        );
                    },
                    save: (e) => {
                        const { attributes: t } = e,
                            {
                                active: a,
                                accordionBorderWidth: o,
                                accordionBorderColor: n,
                                accordionBorderStyle: l,
                                enableBoxShadow: s,
                                boxShadowPalette: p,
                                heading: u,
                                headingColor: h,
                                headingTag: g,
                                headerBg: b,
                                iconPosition: f,
                                collapsedIcon: m,
                                expandedIcon: y,
                                headerSeparator: v,
                                headerSeparatorColor: _,
                                headerSeparatorHeight: k,
                                headerSeparatorStyle: C,
                                headerTopPadding: S,
                                headerBottomPadding: P,
                                headerLeftPadding: w,
                                headerRightPadding: E,
                                enableLinkedHeaderPadding: x,
                                linkedHeaderPadding: B,
                                enableLinkedBodyPadding: A,
                                linkedBodyPadding: O,
                                bodyTopPadding: I,
                                bodyBottomPadding: $,
                                bodyLeftPadding: R,
                                bodyRightPadding: T,
                                bodyBg: z,
                            } = t;
                        return (0, r.createElement)(
                            "div",
                            i({}, c.useBlockProps.save({ className: `${s ? p : ""} ${a ? "esab__active_accordion" : ""}` }), { style: { border: `${o}px ${l} ${n}` } }),
                            (0, r.createElement)(
                                "div",
                                { className: "esab__head" + (f ? " esab__head_reverse" : ""), style: { padding: x ? `${B}px` : `${S}px ${E}px ${P}px ${w}px`, backgroundColor: b || "transparent" }, role: "button", "aria-expanded": a },
                                (0, r.createElement)("div", { className: "esab__heading_txt" }, (0, r.createElement)(c.RichText.Content, { tagName: g, className: "esab__heading_tag", value: u, style: { color: h } })),
                                (0, r.createElement)(
                                    "div",
                                    { className: "esab__icon" + (a ? " esab__active_icon" : "") },
                                    (0, r.createElement)("div", { className: "esab__collapse" }, d[m]),
                                    (0, r.createElement)("div", { className: "esab__expand" }, d[y])
                                )
                            ),
                            (0, r.createElement)(
                                "div",
                                { className: "esab__body" + (a ? " esab__active" : ""), style: { borderTop: v ? `${k}px ${C} ${_}` : "none", padding: A ? `${O}px` : `${I}px ${T}px ${$}px ${R}px`, backgroundColor: z || "transparent" } },
                                (0, r.createElement)(c.InnerBlocks.Content, null)
                            )
                        );
                    },
                });
                const { __ } = wp.i18n,
                    u = [
                        { name: __("Black", "easy-accordion-block"), color: "#080808" },
                        { name: __("Gray", "easy-accordion-block"), color: "#E0E0E0" },
                        { name: __("White", "easy-accordion-block"), color: "#ffffff" },
                        { name: __("Light Green", "easy-accordion-block"), color: "#F0FFFD" },
                        { name: __("Green", "easy-accordion-block"), color: "#3FA796" },
                    ],
                    h = (e) => {
                        let { label: t, value: a, onChange: o, enableCustomColors: n, popOver: i, setPopOver: l, clearable: d } = e;
                        return (0, r.createElement)(
                            "div",
                            { className: "esab__color_picker" },
                            (0, r.createElement)("p", { className: "esab__color_picker_label" }, t),
                            (0, r.createElement)("button", { className: "esab__color_indicator", onClick: l }, (0, r.createElement)(s.ColorIndicator, { colorValue: a })),
                            i &&
                                (0, r.createElement)(
                                    "div",
                                    { className: "esab__color_pallete_container" },
                                    (0, r.createElement)(
                                        s.Popover,
                                        { onFocusOutside: l },
                                        (0, r.createElement)(
                                            "div",
                                            { className: "esab__color_picker" },
                                            n
                                                ? (0, r.createElement)(c.ColorPaletteControl, { label: t, value: a, onChange: o, colors: u, clearable: d })
                                                : (0, r.createElement)(c.ColorPaletteControl, { label: t, value: a, onChange: o, clearable: d })
                                        )
                                    )
                                )
                        );
                    },
                    g = window.React;
                var b = a.n(g);
                const f = [
                        { label: "H1", value: "h1" },
                        { label: "H2", value: "h2" },
                        { label: "H3", value: "h3" },
                        { label: "H4", value: "h4" },
                        { label: "H5", value: "h5" },
                        { label: "H6", value: "h6" },
                        { label: "P", value: "p" },
                    ],
                    m = (e) => {
                        let { label: t, onClick: a, value: o } = e;
                        return (0, r.createElement)(
                            g.Fragment,
                            null,
                            (0, r.createElement)("p", { className: "esab__label" }, t),
                            (0, r.createElement)(
                                "div",
                                { className: "esab__titles_group" },
                                (0, r.createElement)(
                                    s.ButtonGroup,
                                    null,
                                    f.map((e) => (0, r.createElement)(s.Button, { isPressed: e.value === o, key: e.value, onClick: () => a(e.value) }, e.label))
                                )
                            )
                        );
                    };
                var y = a(864),
                    v = a(774),
                    _ = a.n(v);
                const k = function (e) {
                        function t(e, r, c, s, u) {
                            for (var h, g, b, f, _, C = 0, S = 0, P = 0, w = 0, E = 0, $ = 0, T = (b = h = 0), N = 0, L = 0, H = 0, j = 0, M = c.length, D = M - 1, F = "", G = "", W = "", q = ""; N < M; ) {
                                if (((g = c.charCodeAt(N)), N === D && 0 !== S + w + P + C && (0 !== S && (g = 47 === S ? 10 : 47), (w = P = C = 0), M++, D++), 0 === S + w + P + C)) {
                                    if (N === D && (0 < L && (F = F.replace(p, "")), 0 < F.trim().length)) {
                                        switch (g) {
                                            case 32:
                                            case 9:
                                            case 59:
                                            case 13:
                                            case 10:
                                                break;
                                            default:
                                                F += c.charAt(N);
                                        }
                                        g = 59;
                                    }
                                    switch (g) {
                                        case 123:
                                            for (h = (F = F.trim()).charCodeAt(0), b = 1, j = ++N; N < M; ) {
                                                switch ((g = c.charCodeAt(N))) {
                                                    case 123:
                                                        b++;
                                                        break;
                                                    case 125:
                                                        b--;
                                                        break;
                                                    case 47:
                                                        switch ((g = c.charCodeAt(N + 1))) {
                                                            case 42:
                                                            case 47:
                                                                e: {
                                                                    for (T = N + 1; T < D; ++T)
                                                                        switch (c.charCodeAt(T)) {
                                                                            case 47:
                                                                                if (42 === g && 42 === c.charCodeAt(T - 1) && N + 2 !== T) {
                                                                                    N = T + 1;
                                                                                    break e;
                                                                                }
                                                                                break;
                                                                            case 10:
                                                                                if (47 === g) {
                                                                                    N = T + 1;
                                                                                    break e;
                                                                                }
                                                                        }
                                                                    N = T;
                                                                }
                                                        }
                                                        break;
                                                    case 91:
                                                        g++;
                                                    case 40:
                                                        g++;
                                                    case 34:
                                                    case 39:
                                                        for (; N++ < D && c.charCodeAt(N) !== g; );
                                                }
                                                if (0 === b) break;
                                                N++;
                                            }
                                            if (((b = c.substring(j, N)), 0 === h && (h = (F = F.replace(d, "").trim()).charCodeAt(0)), 64 === h)) {
                                                switch ((0 < L && (F = F.replace(p, "")), (g = F.charCodeAt(1)))) {
                                                    case 100:
                                                    case 109:
                                                    case 115:
                                                    case 45:
                                                        L = r;
                                                        break;
                                                    default:
                                                        L = I;
                                                }
                                                if (
                                                    ((j = (b = t(r, L, b, g, u + 1)).length),
                                                    0 < R && ((_ = l(3, b, (L = a(I, F, H)), r, B, x, j, g, u, s)), (F = L.join("")), void 0 !== _ && 0 === (j = (b = _.trim()).length) && ((g = 0), (b = ""))),
                                                    0 < j)
                                                )
                                                    switch (g) {
                                                        case 115:
                                                            F = F.replace(k, i);
                                                        case 100:
                                                        case 109:
                                                        case 45:
                                                            b = F + "{" + b + "}";
                                                            break;
                                                        case 107:
                                                            (b = (F = F.replace(m, "$1 $2")) + "{" + b + "}"), (b = 1 === O || (2 === O && n("@" + b, 3)) ? "@-webkit-" + b + "@" + b : "@" + b);
                                                            break;
                                                        default:
                                                            (b = F + b), 112 === s && ((G += b), (b = ""));
                                                    }
                                                else b = "";
                                            } else b = t(r, a(r, F, H), b, s, u + 1);
                                            (W += b), (b = H = L = T = h = 0), (F = ""), (g = c.charCodeAt(++N));
                                            break;
                                        case 125:
                                        case 59:
                                            if (1 < (j = (F = (0 < L ? F.replace(p, "") : F).trim()).length))
                                                switch (
                                                    (0 === T && ((h = F.charCodeAt(0)), 45 === h || (96 < h && 123 > h)) && (j = (F = F.replace(" ", ":")).length),
                                                    0 < R && void 0 !== (_ = l(1, F, r, e, B, x, G.length, s, u, s)) && 0 === (j = (F = _.trim()).length) && (F = "\0\0"),
                                                    (h = F.charCodeAt(0)),
                                                    (g = F.charCodeAt(1)),
                                                    h)
                                                ) {
                                                    case 0:
                                                        break;
                                                    case 64:
                                                        if (105 === g || 99 === g) {
                                                            q += F + c.charAt(N);
                                                            break;
                                                        }
                                                    default:
                                                        58 !== F.charCodeAt(j - 1) && (G += o(F, h, g, F.charCodeAt(2)));
                                                }
                                            (H = L = T = h = 0), (F = ""), (g = c.charCodeAt(++N));
                                    }
                                }
                                switch (g) {
                                    case 13:
                                    case 10:
                                        47 === S ? (S = 0) : 0 === 1 + h && 107 !== s && 0 < F.length && ((L = 1), (F += "\0")), 0 < R * z && l(0, F, r, e, B, x, G.length, s, u, s), (x = 1), B++;
                                        break;
                                    case 59:
                                    case 125:
                                        if (0 === S + w + P + C) {
                                            x++;
                                            break;
                                        }
                                    default:
                                        switch ((x++, (f = c.charAt(N)), g)) {
                                            case 9:
                                            case 32:
                                                if (0 === w + C + S)
                                                    switch (E) {
                                                        case 44:
                                                        case 58:
                                                        case 9:
                                                        case 32:
                                                            f = "";
                                                            break;
                                                        default:
                                                            32 !== g && (f = " ");
                                                    }
                                                break;
                                            case 0:
                                                f = "\\0";
                                                break;
                                            case 12:
                                                f = "\\f";
                                                break;
                                            case 11:
                                                f = "\\v";
                                                break;
                                            case 38:
                                                0 === w + S + C && ((L = H = 1), (f = "\f" + f));
                                                break;
                                            case 108:
                                                if (0 === w + S + C + A && 0 < T)
                                                    switch (N - T) {
                                                        case 2:
                                                            112 === E && 58 === c.charCodeAt(N - 3) && (A = E);
                                                        case 8:
                                                            111 === $ && (A = $);
                                                    }
                                                break;
                                            case 58:
                                                0 === w + S + C && (T = N);
                                                break;
                                            case 44:
                                                0 === S + P + w + C && ((L = 1), (f += "\r"));
                                                break;
                                            case 34:
                                            case 39:
                                                0 === S && (w = w === g ? 0 : 0 === w ? g : w);
                                                break;
                                            case 91:
                                                0 === w + S + P && C++;
                                                break;
                                            case 93:
                                                0 === w + S + P && C--;
                                                break;
                                            case 41:
                                                0 === w + S + C && P--;
                                                break;
                                            case 40:
                                                0 === w + S + C && (0 === h && (2 * E + 3 * $ == 533 || (h = 1)), P++);
                                                break;
                                            case 64:
                                                0 === S + P + w + C + T + b && (b = 1);
                                                break;
                                            case 42:
                                            case 47:
                                                if (!(0 < w + C + P))
                                                    switch (S) {
                                                        case 0:
                                                            switch (2 * g + 3 * c.charCodeAt(N + 1)) {
                                                                case 235:
                                                                    S = 47;
                                                                    break;
                                                                case 220:
                                                                    (j = N), (S = 42);
                                                            }
                                                            break;
                                                        case 42:
                                                            47 === g && 42 === E && j + 2 !== N && (33 === c.charCodeAt(j + 2) && (G += c.substring(j, N + 1)), (f = ""), (S = 0));
                                                    }
                                        }
                                        0 === S && (F += f);
                                }
                                ($ = E), (E = g), N++;
                            }
                            if (0 < (j = G.length)) {
                                if (((L = r), 0 < R && void 0 !== (_ = l(2, G, L, e, B, x, j, s, u, s)) && 0 === (G = _).length)) return q + G + W;
                                if (((G = L.join(",") + "{" + G + "}"), 0 != O * A)) {
                                    switch ((2 !== O || n(G, 2) || (A = 0), A)) {
                                        case 111:
                                            G = G.replace(v, ":-moz-$1") + G;
                                            break;
                                        case 112:
                                            G = G.replace(y, "::-webkit-input-$1") + G.replace(y, "::-moz-$1") + G.replace(y, ":-ms-input-$1") + G;
                                    }
                                    A = 0;
                                }
                            }
                            return q + G + W;
                        }
                        function a(e, t, a) {
                            var o = t.trim().split(b);
                            t = o;
                            var n = o.length,
                                i = e.length;
                            switch (i) {
                                case 0:
                                case 1:
                                    var l = 0;
                                    for (e = 0 === i ? "" : e[0] + " "; l < n; ++l) t[l] = r(e, t[l], a).trim();
                                    break;
                                default:
                                    var c = (l = 0);
                                    for (t = []; l < n; ++l) for (var s = 0; s < i; ++s) t[c++] = r(e[s] + " ", o[l], a).trim();
                            }
                            return t;
                        }
                        function r(e, t, a) {
                            var r = t.charCodeAt(0);
                            switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
                                case 38:
                                    return t.replace(f, "$1" + e.trim());
                                case 58:
                                    return e.trim() + t.replace(f, "$1" + e.trim());
                                default:
                                    if (0 < 1 * a && 0 < t.indexOf("\f")) return t.replace(f, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim());
                            }
                            return e + t;
                        }
                        function o(e, t, a, r) {
                            var i = e + ";",
                                l = 2 * t + 3 * a + 4 * r;
                            if (944 === l) {
                                e = i.indexOf(":", 9) + 1;
                                var c = i.substring(e, i.length - 1).trim();
                                return (c = i.substring(0, e).trim() + c + ";"), 1 === O || (2 === O && n(c, 1)) ? "-webkit-" + c + c : c;
                            }
                            if (0 === O || (2 === O && !n(i, 1))) return i;
                            switch (l) {
                                case 1015:
                                    return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
                                case 951:
                                    return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
                                case 963:
                                    return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
                                case 1009:
                                    if (100 !== i.charCodeAt(4)) break;
                                case 969:
                                case 942:
                                    return "-webkit-" + i + i;
                                case 978:
                                    return "-webkit-" + i + "-moz-" + i + i;
                                case 1019:
                                case 983:
                                    return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
                                case 883:
                                    if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
                                    if (0 < i.indexOf("image-set(", 11)) return i.replace(E, "$1-webkit-$2") + i;
                                    break;
                                case 932:
                                    if (45 === i.charCodeAt(4))
                                        switch (i.charCodeAt(5)) {
                                            case 103:
                                                return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
                                            case 115:
                                                return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
                                            case 98:
                                                return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i;
                                        }
                                    return "-webkit-" + i + "-ms-" + i + i;
                                case 964:
                                    return "-webkit-" + i + "-ms-flex-" + i + i;
                                case 1023:
                                    if (99 !== i.charCodeAt(8)) break;
                                    return "-webkit-box-pack" + (c = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + c + i;
                                case 1005:
                                    return h.test(i) ? i.replace(u, ":-webkit-") + i.replace(u, ":-moz-") + i : i;
                                case 1e3:
                                    switch (((t = (c = i.substring(13).trim()).indexOf("-") + 1), c.charCodeAt(0) + c.charCodeAt(t))) {
                                        case 226:
                                            c = i.replace(_, "tb");
                                            break;
                                        case 232:
                                            c = i.replace(_, "tb-rl");
                                            break;
                                        case 220:
                                            c = i.replace(_, "lr");
                                            break;
                                        default:
                                            return i;
                                    }
                                    return "-webkit-" + i + "-ms-" + c + i;
                                case 1017:
                                    if (-1 === i.indexOf("sticky", 9)) break;
                                case 975:
                                    switch (((t = (i = e).length - 10), (l = (c = (33 === i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))))) {
                                        case 203:
                                            if (111 > c.charCodeAt(8)) break;
                                        case 115:
                                            i = i.replace(c, "-webkit-" + c) + ";" + i;
                                            break;
                                        case 207:
                                        case 102:
                                            i = i.replace(c, "-webkit-" + (102 < l ? "inline-" : "") + "box") + ";" + i.replace(c, "-webkit-" + c) + ";" + i.replace(c, "-ms-" + c + "box") + ";" + i;
                                    }
                                    return i + ";";
                                case 938:
                                    if (45 === i.charCodeAt(5))
                                        switch (i.charCodeAt(6)) {
                                            case 105:
                                                return (c = i.replace("-items", "")), "-webkit-" + i + "-webkit-box-" + c + "-ms-flex-" + c + i;
                                            case 115:
                                                return "-webkit-" + i + "-ms-flex-item-" + i.replace(S, "") + i;
                                            default:
                                                return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(S, "") + i;
                                        }
                                    break;
                                case 973:
                                case 989:
                                    if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
                                case 931:
                                case 953:
                                    if (!0 === w.test(e))
                                        return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                                            ? o(e.replace("stretch", "fill-available"), t, a, r).replace(":fill-available", ":stretch")
                                            : i.replace(c, "-webkit-" + c) + i.replace(c, "-moz-" + c.replace("fill-", "")) + i;
                                    break;
                                case 962:
                                    if (((i = "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i), 211 === a + r && 105 === i.charCodeAt(13) && 0 < i.indexOf("transform", 10)))
                                        return i.substring(0, i.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + i;
                            }
                            return i;
                        }
                        function n(e, t) {
                            var a = e.indexOf(1 === t ? ":" : "{"),
                                r = e.substring(0, 3 !== t ? a : 10);
                            return (a = e.substring(a + 1, e.length - 1)), T(2 !== t ? r : r.replace(P, "$1"), a, t);
                        }
                        function i(e, t) {
                            var a = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                            return a !== t + ";" ? a.replace(C, " or ($1)").substring(4) : "(" + t + ")";
                        }
                        function l(e, t, a, r, o, n, i, l, c, d) {
                            for (var p, u = 0, h = t; u < R; ++u)
                                switch ((p = $[u].call(s, e, h, a, r, o, n, i, l, c, d))) {
                                    case void 0:
                                    case !1:
                                    case !0:
                                    case null:
                                        break;
                                    default:
                                        h = p;
                                }
                            if (h !== t) return h;
                        }
                        function c(e) {
                            return void 0 !== (e = e.prefix) && ((T = null), e ? ("function" != typeof e ? (O = 1) : ((O = 2), (T = e))) : (O = 0)), c;
                        }
                        function s(e, a) {
                            var r = e;
                            if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < R)) {
                                var o = l(-1, a, r, r, B, x, 0, 0, 0, 0);
                                void 0 !== o && "string" == typeof o && (a = o);
                            }
                            var n = t(I, r, a, 0, 0);
                            return 0 < R && void 0 !== (o = l(-2, n, r, r, B, x, n.length, 0, 0, 0)) && (n = o), (A = 0), (x = B = 1), n;
                        }
                        var d = /^\0+/g,
                            p = /[\0\r\f]/g,
                            u = /: */g,
                            h = /zoo|gra/,
                            g = /([,: ])(transform)/g,
                            b = /,\r+?/g,
                            f = /([\t\r\n ])*\f?&/g,
                            m = /@(k\w+)\s*(\S*)\s*/,
                            y = /::(place)/g,
                            v = /:(read-only)/g,
                            _ = /[svh]\w+-[tblr]{2}/,
                            k = /\(\s*(.*)\s*\)/g,
                            C = /([\s\S]*?);/g,
                            S = /-self|flex-/g,
                            P = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                            w = /stretch|:\s*\w+\-(?:conte|avail)/,
                            E = /([^-])(image-set\()/,
                            x = 1,
                            B = 1,
                            A = 0,
                            O = 1,
                            I = [],
                            $ = [],
                            R = 0,
                            T = null,
                            z = 0;
                        return (
                            (s.use = function e(t) {
                                switch (t) {
                                    case void 0:
                                    case null:
                                        R = $.length = 0;
                                        break;
                                    default:
                                        if ("function" == typeof t) $[R++] = t;
                                        else if ("object" == typeof t) for (var a = 0, r = t.length; a < r; ++a) e(t[a]);
                                        else z = 0 | !!t;
                                }
                                return e;
                            }),
                            (s.set = c),
                            void 0 !== e && c(e),
                            s
                        );
                    },
                    C = {
                        animationIterationCount: 1,
                        borderImageOutset: 1,
                        borderImageSlice: 1,
                        borderImageWidth: 1,
                        boxFlex: 1,
                        boxFlexGroup: 1,
                        boxOrdinalGroup: 1,
                        columnCount: 1,
                        columns: 1,
                        flex: 1,
                        flexGrow: 1,
                        flexPositive: 1,
                        flexShrink: 1,
                        flexNegative: 1,
                        flexOrder: 1,
                        gridRow: 1,
                        gridRowEnd: 1,
                        gridRowSpan: 1,
                        gridRowStart: 1,
                        gridColumn: 1,
                        gridColumnEnd: 1,
                        gridColumnSpan: 1,
                        gridColumnStart: 1,
                        msGridRow: 1,
                        msGridRowSpan: 1,
                        msGridColumn: 1,
                        msGridColumnSpan: 1,
                        fontWeight: 1,
                        lineHeight: 1,
                        opacity: 1,
                        order: 1,
                        orphans: 1,
                        tabSize: 1,
                        widows: 1,
                        zIndex: 1,
                        zoom: 1,
                        WebkitLineClamp: 1,
                        fillOpacity: 1,
                        floodOpacity: 1,
                        stopOpacity: 1,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        strokeMiterlimit: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1,
                    };
                var S = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
                const P = (function (e) {
                    var t = Object.create(null);
                    return function (e) {
                        return void 0 === t[e] && (t[e] = ((a = e), S.test(a) || (111 === a.charCodeAt(0) && 110 === a.charCodeAt(1) && a.charCodeAt(2) < 91))), t[e];
                        var a;
                    };
                })();
                var w = a(679),
                    E = a.n(w);
                function x() {
                    return (x =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                            }
                            return e;
                        }).apply(this, arguments);
                }
                var B = function (e, t) {
                        for (var a = [e[0]], r = 0, o = t.length; r < o; r += 1) a.push(t[r], e[r + 1]);
                        return a;
                    },
                    A = function (e) {
                        return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, y.typeOf)(e);
                    },
                    O = Object.freeze([]),
                    I = Object.freeze({});
                function $(e) {
                    return "function" == typeof e;
                }
                function R(e) {
                    return e.displayName || e.name || "Component";
                }
                function T(e) {
                    return e && "string" == typeof e.styledComponentId;
                }
                var z = ("undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) || "data-styled",
                    N = "undefined" != typeof window && "HTMLElement" in window,
                    L = Boolean(
                        "boolean" == typeof SC_DISABLE_SPEEDY
                            ? SC_DISABLE_SPEEDY
                            : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
                            ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY
                            : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY
                    );
                function H(e) {
                    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (a.length > 0 ? " Args: " + a.join(", ") : ""));
                }
                var j = (function () {
                        function e(e) {
                            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
                        }
                        var t = e.prototype;
                        return (
                            (t.indexOfGroup = function (e) {
                                for (var t = 0, a = 0; a < e; a++) t += this.groupSizes[a];
                                return t;
                            }),
                            (t.insertRules = function (e, t) {
                                if (e >= this.groupSizes.length) {
                                    for (var a = this.groupSizes, r = a.length, o = r; e >= o; ) (o <<= 1) < 0 && H(16, "" + e);
                                    (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(a), (this.length = o);
                                    for (var n = r; n < o; n++) this.groupSizes[n] = 0;
                                }
                                for (var i = this.indexOfGroup(e + 1), l = 0, c = t.length; l < c; l++) this.tag.insertRule(i, t[l]) && (this.groupSizes[e]++, i++);
                            }),
                            (t.clearGroup = function (e) {
                                if (e < this.length) {
                                    var t = this.groupSizes[e],
                                        a = this.indexOfGroup(e),
                                        r = a + t;
                                    this.groupSizes[e] = 0;
                                    for (var o = a; o < r; o++) this.tag.deleteRule(a);
                                }
                            }),
                            (t.getGroup = function (e) {
                                var t = "";
                                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                                for (var a = this.groupSizes[e], r = this.indexOfGroup(e), o = r + a, n = r; n < o; n++) t += this.tag.getRule(n) + "/*!sc*/\n";
                                return t;
                            }),
                            e
                        );
                    })(),
                    M = new Map(),
                    D = new Map(),
                    F = 1,
                    G = function (e) {
                        if (M.has(e)) return M.get(e);
                        for (; D.has(F); ) F++;
                        var t = F++;
                        return M.set(e, t), D.set(t, e), t;
                    },
                    W = function (e) {
                        return D.get(e);
                    },
                    q = function (e, t) {
                        t >= F && (F = t + 1), M.set(e, t), D.set(t, e);
                    },
                    V = "style[" + z + '][data-styled-version="5.3.5"]',
                    Y = new RegExp("^" + z + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                    U = function (e, t, a) {
                        for (var r, o = a.split(","), n = 0, i = o.length; n < i; n++) (r = o[n]) && e.registerName(t, r);
                    },
                    X = function (e, t) {
                        for (var a = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, n = a.length; o < n; o++) {
                            var i = a[o].trim();
                            if (i) {
                                var l = i.match(Y);
                                if (l) {
                                    var c = 0 | parseInt(l[1], 10),
                                        s = l[2];
                                    0 !== c && (q(s, c), U(e, s, l[3]), e.getTag().insertRules(c, r)), (r.length = 0);
                                } else r.push(i);
                            }
                        }
                    },
                    Z = function () {
                        return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
                    },
                    J = function (e) {
                        var t = document.head,
                            a = e || t,
                            r = document.createElement("style"),
                            o = (function (e) {
                                for (var t = e.childNodes, a = t.length; a >= 0; a--) {
                                    var r = t[a];
                                    if (r && 1 === r.nodeType && r.hasAttribute(z)) return r;
                                }
                            })(a),
                            n = void 0 !== o ? o.nextSibling : null;
                        r.setAttribute(z, "active"), r.setAttribute("data-styled-version", "5.3.5");
                        var i = Z();
                        return i && r.setAttribute("nonce", i), a.insertBefore(r, n), r;
                    },
                    K = (function () {
                        function e(e) {
                            var t = (this.element = J(e));
                            t.appendChild(document.createTextNode("")),
                                (this.sheet = (function (e) {
                                    if (e.sheet) return e.sheet;
                                    for (var t = document.styleSheets, a = 0, r = t.length; a < r; a++) {
                                        var o = t[a];
                                        if (o.ownerNode === e) return o;
                                    }
                                    H(17);
                                })(t)),
                                (this.length = 0);
                        }
                        var t = e.prototype;
                        return (
                            (t.insertRule = function (e, t) {
                                try {
                                    return this.sheet.insertRule(t, e), this.length++, !0;
                                } catch (e) {
                                    return !1;
                                }
                            }),
                            (t.deleteRule = function (e) {
                                this.sheet.deleteRule(e), this.length--;
                            }),
                            (t.getRule = function (e) {
                                var t = this.sheet.cssRules[e];
                                return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
                            }),
                            e
                        );
                    })(),
                    Q = (function () {
                        function e(e) {
                            var t = (this.element = J(e));
                            (this.nodes = t.childNodes), (this.length = 0);
                        }
                        var t = e.prototype;
                        return (
                            (t.insertRule = function (e, t) {
                                if (e <= this.length && e >= 0) {
                                    var a = document.createTextNode(t),
                                        r = this.nodes[e];
                                    return this.element.insertBefore(a, r || null), this.length++, !0;
                                }
                                return !1;
                            }),
                            (t.deleteRule = function (e) {
                                this.element.removeChild(this.nodes[e]), this.length--;
                            }),
                            (t.getRule = function (e) {
                                return e < this.length ? this.nodes[e].textContent : "";
                            }),
                            e
                        );
                    })(),
                    ee = (function () {
                        function e(e) {
                            (this.rules = []), (this.length = 0);
                        }
                        var t = e.prototype;
                        return (
                            (t.insertRule = function (e, t) {
                                return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
                            }),
                            (t.deleteRule = function (e) {
                                this.rules.splice(e, 1), this.length--;
                            }),
                            (t.getRule = function (e) {
                                return e < this.length ? this.rules[e] : "";
                            }),
                            e
                        );
                    })(),
                    te = N,
                    ae = { isServer: !N, useCSSOMInjection: !L },
                    re = (function () {
                        function e(e, t, a) {
                            void 0 === e && (e = I),
                                void 0 === t && (t = {}),
                                (this.options = x({}, ae, {}, e)),
                                (this.gs = t),
                                (this.names = new Map(a)),
                                (this.server = !!e.isServer),
                                !this.server &&
                                    N &&
                                    te &&
                                    ((te = !1),
                                    (function (e) {
                                        for (var t = document.querySelectorAll(V), a = 0, r = t.length; a < r; a++) {
                                            var o = t[a];
                                            o && "active" !== o.getAttribute(z) && (X(e, o), o.parentNode && o.parentNode.removeChild(o));
                                        }
                                    })(this));
                        }
                        e.registerId = function (e) {
                            return G(e);
                        };
                        var t = e.prototype;
                        return (
                            (t.reconstructWithOptions = function (t, a) {
                                return void 0 === a && (a = !0), new e(x({}, this.options, {}, t), this.gs, (a && this.names) || void 0);
                            }),
                            (t.allocateGSInstance = function (e) {
                                return (this.gs[e] = (this.gs[e] || 0) + 1);
                            }),
                            (t.getTag = function () {
                                return this.tag || (this.tag = ((a = (t = this.options).isServer), (r = t.useCSSOMInjection), (o = t.target), (e = a ? new ee(o) : r ? new K(o) : new Q(o)), new j(e)));
                                var e, t, a, r, o;
                            }),
                            (t.hasNameForId = function (e, t) {
                                return this.names.has(e) && this.names.get(e).has(t);
                            }),
                            (t.registerName = function (e, t) {
                                if ((G(e), this.names.has(e))) this.names.get(e).add(t);
                                else {
                                    var a = new Set();
                                    a.add(t), this.names.set(e, a);
                                }
                            }),
                            (t.insertRules = function (e, t, a) {
                                this.registerName(e, t), this.getTag().insertRules(G(e), a);
                            }),
                            (t.clearNames = function (e) {
                                this.names.has(e) && this.names.get(e).clear();
                            }),
                            (t.clearRules = function (e) {
                                this.getTag().clearGroup(G(e)), this.clearNames(e);
                            }),
                            (t.clearTag = function () {
                                this.tag = void 0;
                            }),
                            (t.toString = function () {
                                return (function (e) {
                                    for (var t = e.getTag(), a = t.length, r = "", o = 0; o < a; o++) {
                                        var n = W(o);
                                        if (void 0 !== n) {
                                            var i = e.names.get(n),
                                                l = t.getGroup(o);
                                            if (i && l && i.size) {
                                                var c = z + ".g" + o + '[id="' + n + '"]',
                                                    s = "";
                                                void 0 !== i &&
                                                    i.forEach(function (e) {
                                                        e.length > 0 && (s += e + ",");
                                                    }),
                                                    (r += "" + l + c + '{content:"' + s + '"}/*!sc*/\n');
                                            }
                                        }
                                    }
                                    return r;
                                })(this);
                            }),
                            e
                        );
                    })(),
                    oe = /(a)(d)/gi,
                    ne = function (e) {
                        return String.fromCharCode(e + (e > 25 ? 39 : 97));
                    };
                function ie(e) {
                    var t,
                        a = "";
                    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) a = ne(t % 52) + a;
                    return (ne(t % 52) + a).replace(oe, "$1-$2");
                }
                var le = function (e, t) {
                        for (var a = t.length; a; ) e = (33 * e) ^ t.charCodeAt(--a);
                        return e;
                    },
                    ce = function (e) {
                        return le(5381, e);
                    };
                function se(e) {
                    for (var t = 0; t < e.length; t += 1) {
                        var a = e[t];
                        if ($(a) && !T(a)) return !1;
                    }
                    return !0;
                }
                var de = ce("5.3.5"),
                    pe = (function () {
                        function e(e, t, a) {
                            (this.rules = e), (this.staticRulesId = ""), (this.isStatic = (void 0 === a || a.isStatic) && se(e)), (this.componentId = t), (this.baseHash = le(de, t)), (this.baseStyle = a), re.registerId(t);
                        }
                        return (
                            (e.prototype.generateAndInjectStyles = function (e, t, a) {
                                var r = this.componentId,
                                    o = [];
                                if ((this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, a)), this.isStatic && !a.hash))
                                    if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                                    else {
                                        var n = Be(this.rules, e, t, a).join(""),
                                            i = ie(le(this.baseHash, n) >>> 0);
                                        if (!t.hasNameForId(r, i)) {
                                            var l = a(n, "." + i, void 0, r);
                                            t.insertRules(r, i, l);
                                        }
                                        o.push(i), (this.staticRulesId = i);
                                    }
                                else {
                                    for (var c = this.rules.length, s = le(this.baseHash, a.hash), d = "", p = 0; p < c; p++) {
                                        var u = this.rules[p];
                                        if ("string" == typeof u) d += u;
                                        else if (u) {
                                            var h = Be(u, e, t, a),
                                                g = Array.isArray(h) ? h.join("") : h;
                                            (s = le(s, g + p)), (d += g);
                                        }
                                    }
                                    if (d) {
                                        var b = ie(s >>> 0);
                                        if (!t.hasNameForId(r, b)) {
                                            var f = a(d, "." + b, void 0, r);
                                            t.insertRules(r, b, f);
                                        }
                                        o.push(b);
                                    }
                                }
                                return o.join(" ");
                            }),
                            e
                        );
                    })(),
                    ue = /^\s*\/\/.*$/gm,
                    he = [":", "[", ".", "#"];
                function ge(e) {
                    var t,
                        a,
                        r,
                        o,
                        n = void 0 === e ? I : e,
                        i = n.options,
                        l = void 0 === i ? I : i,
                        c = n.plugins,
                        s = void 0 === c ? O : c,
                        d = new k(l),
                        p = [],
                        u = (function (e) {
                            function t(t) {
                                if (t)
                                    try {
                                        e(t + "}");
                                    } catch (e) {}
                            }
                            return function (a, r, o, n, i, l, c, s, d, p) {
                                switch (a) {
                                    case 1:
                                        if (0 === d && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                        break;
                                    case 2:
                                        if (0 === s) return r + "/*|*/";
                                        break;
                                    case 3:
                                        switch (s) {
                                            case 102:
                                            case 112:
                                                return e(o[0] + r), "";
                                            default:
                                                return r + (0 === p ? "/*|*/" : "");
                                        }
                                    case -2:
                                        r.split("/*|*/}").forEach(t);
                                }
                            };
                        })(function (e) {
                            p.push(e);
                        }),
                        h = function (e, r, n) {
                            return (0 === r && -1 !== he.indexOf(n[a.length])) || n.match(o) ? e : "." + t;
                        };
                    function g(e, n, i, l) {
                        void 0 === l && (l = "&");
                        var c = e.replace(ue, ""),
                            s = n && i ? i + " " + n + " { " + c + " }" : c;
                        return (t = l), (a = n), (r = new RegExp("\\" + a + "\\b", "g")), (o = new RegExp("(\\" + a + "\\b){2,}")), d(i || !n ? "" : n, s);
                    }
                    return (
                        d.use(
                            [].concat(s, [
                                function (e, t, o) {
                                    2 === e && o.length && o[0].lastIndexOf(a) > 0 && (o[0] = o[0].replace(r, h));
                                },
                                u,
                                function (e) {
                                    if (-2 === e) {
                                        var t = p;
                                        return (p = []), t;
                                    }
                                },
                            ])
                        ),
                        (g.hash = s.length
                            ? s
                                  .reduce(function (e, t) {
                                      return t.name || H(15), le(e, t.name);
                                  }, 5381)
                                  .toString()
                            : ""),
                        g
                    );
                }
                var be = b().createContext(),
                    fe = (be.Consumer, b().createContext()),
                    me = (fe.Consumer, new re()),
                    ye = ge();
                function ve() {
                    return (0, g.useContext)(be) || me;
                }
                function _e(e) {
                    var t = (0, g.useState)(e.stylisPlugins),
                        a = t[0],
                        r = t[1],
                        o = ve(),
                        n = (0, g.useMemo)(
                            function () {
                                var t = o;
                                return e.sheet ? (t = e.sheet) : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
                            },
                            [e.disableCSSOMInjection, e.sheet, e.target]
                        ),
                        i = (0, g.useMemo)(
                            function () {
                                return ge({ options: { prefix: !e.disableVendorPrefixes }, plugins: a });
                            },
                            [e.disableVendorPrefixes, a]
                        );
                    return (
                        (0, g.useEffect)(
                            function () {
                                _()(a, e.stylisPlugins) || r(e.stylisPlugins);
                            },
                            [e.stylisPlugins]
                        ),
                        b().createElement(be.Provider, { value: n }, b().createElement(fe.Provider, { value: i }, e.children))
                    );
                }
                var ke = (function () {
                        function e(e, t) {
                            var a = this;
                            (this.inject = function (e, t) {
                                void 0 === t && (t = ye);
                                var r = a.name + t.hash;
                                e.hasNameForId(a.id, r) || e.insertRules(a.id, r, t(a.rules, r, "@keyframes"));
                            }),
                                (this.toString = function () {
                                    return H(12, String(a.name));
                                }),
                                (this.name = e),
                                (this.id = "sc-keyframes-" + e),
                                (this.rules = t);
                        }
                        return (
                            (e.prototype.getName = function (e) {
                                return void 0 === e && (e = ye), this.name + e.hash;
                            }),
                            e
                        );
                    })(),
                    Ce = /([A-Z])/,
                    Se = /([A-Z])/g,
                    Pe = /^ms-/,
                    we = function (e) {
                        return "-" + e.toLowerCase();
                    };
                function Ee(e) {
                    return Ce.test(e) ? e.replace(Se, we).replace(Pe, "-ms-") : e;
                }
                var xe = function (e) {
                    return null == e || !1 === e || "" === e;
                };
                function Be(e, t, a, r) {
                    if (Array.isArray(e)) {
                        for (var o, n = [], i = 0, l = e.length; i < l; i += 1) "" !== (o = Be(e[i], t, a, r)) && (Array.isArray(o) ? n.push.apply(n, o) : n.push(o));
                        return n;
                    }
                    return xe(e)
                        ? ""
                        : T(e)
                        ? "." + e.styledComponentId
                        : $(e)
                        ? "function" != typeof (c = e) || (c.prototype && c.prototype.isReactComponent) || !t
                            ? e
                            : Be(e(t), t, a, r)
                        : e instanceof ke
                        ? a
                            ? (e.inject(a, r), e.getName(r))
                            : e
                        : A(e)
                        ? (function e(t, a) {
                              var r,
                                  o,
                                  n = [];
                              for (var i in t)
                                  t.hasOwnProperty(i) &&
                                      !xe(t[i]) &&
                                      ((Array.isArray(t[i]) && t[i].isCss) || $(t[i])
                                          ? n.push(Ee(i) + ":", t[i], ";")
                                          : A(t[i])
                                          ? n.push.apply(n, e(t[i], i))
                                          : n.push(Ee(i) + ": " + ((r = i), (null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in C ? String(o).trim() : o + "px") + ";")));
                              return a ? [a + " {"].concat(n, ["}"]) : n;
                          })(e)
                        : e.toString();
                    var c;
                }
                var Ae = function (e) {
                    return Array.isArray(e) && (e.isCss = !0), e;
                };
                function Oe(e) {
                    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    return $(e) || A(e) ? Ae(Be(B(O, [e].concat(a)))) : 0 === a.length && 1 === e.length && "string" == typeof e[0] ? e : Ae(Be(B(e, a)));
                }
                new Set();
                var Ie = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                    $e = /(^-|-$)/g;
                function Re(e) {
                    return e.replace(Ie, "-").replace($e, "");
                }
                function Te(e) {
                    return "string" == typeof e && !0;
                }
                var ze = function (e) {
                        return "function" == typeof e || ("object" == typeof e && null !== e && !Array.isArray(e));
                    },
                    Ne = function (e) {
                        return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
                    };
                function Le(e, t, a) {
                    var r = e[a];
                    ze(t) && ze(r) ? He(r, t) : (e[a] = t);
                }
                function He(e) {
                    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    for (var o = 0, n = a; o < n.length; o++) {
                        var i = n[o];
                        if (ze(i)) for (var l in i) Ne(l) && Le(e, i[l], l);
                    }
                    return e;
                }
                var je = b().createContext();
                je.Consumer;
                var Me = {};
                function De(e, t, a) {
                    var r = T(e),
                        o = !Te(e),
                        n = t.attrs,
                        i = void 0 === n ? O : n,
                        l = t.componentId,
                        c =
                            void 0 === l
                                ? (function (e, t) {
                                      var a = "string" != typeof e ? "sc" : Re(e);
                                      Me[a] = (Me[a] || 0) + 1;
                                      var r =
                                          a +
                                          "-" +
                                          (function (e) {
                                              return ie(ce(e) >>> 0);
                                          })("5.3.5" + a + Me[a]);
                                      return t ? t + "-" + r : r;
                                  })(t.displayName, t.parentComponentId)
                                : l,
                        s = t.displayName,
                        d =
                            void 0 === s
                                ? (function (e) {
                                      return Te(e) ? "styled." + e : "Styled(" + R(e) + ")";
                                  })(e)
                                : s,
                        p = t.displayName && t.componentId ? Re(t.displayName) + "-" + t.componentId : t.componentId || c,
                        u = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i,
                        h = t.shouldForwardProp;
                    r &&
                        e.shouldForwardProp &&
                        (h = t.shouldForwardProp
                            ? function (a, r, o) {
                                  return e.shouldForwardProp(a, r, o) && t.shouldForwardProp(a, r, o);
                              }
                            : e.shouldForwardProp);
                    var f,
                        m = new pe(a, p, r ? e.componentStyle : void 0),
                        y = m.isStatic && 0 === i.length,
                        v = function (e, t) {
                            return (function (e, t, a, r) {
                                var o = e.attrs,
                                    n = e.componentStyle,
                                    i = e.defaultProps,
                                    l = e.foldedComponentIds,
                                    c = e.shouldForwardProp,
                                    s = e.styledComponentId,
                                    d = e.target,
                                    p = (function (e, t, a) {
                                        void 0 === e && (e = I);
                                        var r = x({}, t, { theme: e }),
                                            o = {};
                                        return (
                                            a.forEach(function (e) {
                                                var t,
                                                    a,
                                                    n,
                                                    i = e;
                                                for (t in ($(i) && (i = i(r)), i)) r[t] = o[t] = "className" === t ? ((a = o[t]), (n = i[t]), a && n ? a + " " + n : a || n) : i[t];
                                            }),
                                            [r, o]
                                        );
                                    })(
                                        (function (e, t, a) {
                                            return void 0 === a && (a = I), (e.theme !== a.theme && e.theme) || t || a.theme;
                                        })(t, (0, g.useContext)(je), i) || I,
                                        t,
                                        o
                                    ),
                                    u = p[0],
                                    h = p[1],
                                    b = (function (e, t, a, r) {
                                        var o = ve(),
                                            n = (0, g.useContext)(fe) || ye;
                                        return t ? e.generateAndInjectStyles(I, o, n) : e.generateAndInjectStyles(a, o, n);
                                    })(n, r, u),
                                    f = a,
                                    m = h.$as || t.$as || h.as || t.as || d,
                                    y = Te(m),
                                    v = h !== t ? x({}, t, {}, h) : t,
                                    _ = {};
                                for (var k in v) "$" !== k[0] && "as" !== k && ("forwardedAs" === k ? (_.as = v[k]) : (c ? c(k, P, m) : !y || P(k)) && (_[k] = v[k]));
                                return (
                                    t.style && h.style !== t.style && (_.style = x({}, t.style, {}, h.style)),
                                    (_.className = Array.prototype
                                        .concat(l, s, b !== s ? b : null, t.className, h.className)
                                        .filter(Boolean)
                                        .join(" ")),
                                    (_.ref = f),
                                    (0, g.createElement)(m, _)
                                );
                            })(f, e, t, y);
                        };
                    return (
                        (v.displayName = d),
                        ((f = b().forwardRef(v)).attrs = u),
                        (f.componentStyle = m),
                        (f.displayName = d),
                        (f.shouldForwardProp = h),
                        (f.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : O),
                        (f.styledComponentId = p),
                        (f.target = r ? e.target : e),
                        (f.withComponent = function (e) {
                            var r = t.componentId,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        o = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a]);
                                    return o;
                                })(t, ["componentId"]),
                                n = r && r + "-" + (Te(e) ? e : Re(R(e)));
                            return De(e, x({}, o, { attrs: u, componentId: n }), a);
                        }),
                        Object.defineProperty(f, "defaultProps", {
                            get: function () {
                                return this._foldedDefaultProps;
                            },
                            set: function (t) {
                                this._foldedDefaultProps = r ? He({}, e.defaultProps, t) : t;
                            },
                        }),
                        (f.toString = function () {
                            return "." + f.styledComponentId;
                        }),
                        o && E()(f, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }),
                        f
                    );
                }
                var Fe,
                    Ge = function (e) {
                        return (function e(t, a, r) {
                            if ((void 0 === r && (r = I), !(0, y.isValidElementType)(a))) return H(1, String(a));
                            var o = function () {
                                return t(a, r, Oe.apply(void 0, arguments));
                            };
                            return (
                                (o.withConfig = function (o) {
                                    return e(t, a, x({}, r, {}, o));
                                }),
                                (o.attrs = function (o) {
                                    return e(t, a, x({}, r, { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
                                }),
                                o
                            );
                        })(De, e);
                    };
                [
                    "a",
                    "abbr",
                    "address",
                    "area",
                    "article",
                    "aside",
                    "audio",
                    "b",
                    "base",
                    "bdi",
                    "bdo",
                    "big",
                    "blockquote",
                    "body",
                    "br",
                    "button",
                    "canvas",
                    "caption",
                    "cite",
                    "code",
                    "col",
                    "colgroup",
                    "data",
                    "datalist",
                    "dd",
                    "del",
                    "details",
                    "dfn",
                    "dialog",
                    "div",
                    "dl",
                    "dt",
                    "em",
                    "embed",
                    "fieldset",
                    "figcaption",
                    "figure",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "head",
                    "header",
                    "hgroup",
                    "hr",
                    "html",
                    "i",
                    "iframe",
                    "img",
                    "input",
                    "ins",
                    "kbd",
                    "keygen",
                    "label",
                    "legend",
                    "li",
                    "link",
                    "main",
                    "map",
                    "mark",
                    "marquee",
                    "menu",
                    "menuitem",
                    "meta",
                    "meter",
                    "nav",
                    "noscript",
                    "object",
                    "ol",
                    "optgroup",
                    "option",
                    "output",
                    "p",
                    "param",
                    "picture",
                    "pre",
                    "progress",
                    "q",
                    "rp",
                    "rt",
                    "ruby",
                    "s",
                    "samp",
                    "script",
                    "section",
                    "select",
                    "small",
                    "source",
                    "span",
                    "strong",
                    "style",
                    "sub",
                    "summary",
                    "sup",
                    "table",
                    "tbody",
                    "td",
                    "textarea",
                    "tfoot",
                    "th",
                    "thead",
                    "time",
                    "title",
                    "tr",
                    "track",
                    "u",
                    "ul",
                    "var",
                    "video",
                    "wbr",
                    "circle",
                    "clipPath",
                    "defs",
                    "ellipse",
                    "foreignObject",
                    "g",
                    "image",
                    "line",
                    "linearGradient",
                    "marker",
                    "mask",
                    "path",
                    "pattern",
                    "polygon",
                    "polyline",
                    "radialGradient",
                    "rect",
                    "stop",
                    "svg",
                    "text",
                    "textPath",
                    "tspan",
                ].forEach(function (e) {
                    Ge[e] = Ge(e);
                }),
                    (Fe = function (e, t) {
                        (this.rules = e), (this.componentId = t), (this.isStatic = se(e)), re.registerId(this.componentId + 1);
                    }.prototype),
                    (Fe.createStyles = function (e, t, a, r) {
                        var o = r(Be(this.rules, t, a, r).join(""), ""),
                            n = this.componentId + e;
                        a.insertRules(n, n, o);
                    }),
                    (Fe.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e);
                    }),
                    (Fe.renderStyles = function (e, t, a, r) {
                        e > 2 && re.registerId(this.componentId + e), this.removeStyles(e, a), this.createStyles(e, t, a, r);
                    }),
                    (function () {
                        var e = function () {
                            var e = this;
                            (this._emitSheetCSS = function () {
                                var t = e.instance.toString();
                                if (!t) return "";
                                var a = Z();
                                return "<style " + [a && 'nonce="' + a + '"', z + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + t + "</style>";
                            }),
                                (this.getStyleTags = function () {
                                    return e.sealed ? H(2) : e._emitSheetCSS();
                                }),
                                (this.getStyleElement = function () {
                                    var t;
                                    if (e.sealed) return H(2);
                                    var a = (((t = {})[z] = ""), (t["data-styled-version"] = "5.3.5"), (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }), t),
                                        r = Z();
                                    return r && (a.nonce = r), [b().createElement("style", x({}, a, { key: "sc-0-0" }))];
                                }),
                                (this.seal = function () {
                                    e.sealed = !0;
                                }),
                                (this.instance = new re({ isServer: !0 })),
                                (this.sealed = !1);
                        }.prototype;
                        (e.collectStyles = function (e) {
                            return this.sealed ? H(2) : b().createElement(_e, { sheet: this.instance }, e);
                        }),
                            (e.interleaveWithNodeStream = function (e) {
                                return H(3);
                            });
                    })();
                const We = Ge,
                    { Fragment: qe } = wp.element,
                    Ve = We.div`
	z-index: ${(e) => e.zindex};
	margin-top: ${(e) => e.marginTop}px !important;
	margin-bottom: ${(e) => e.marginBottom}px !important;
	.wp-block-esab-accordion-child {
		border-radius: ${(e) => e.accordionBorderRadius}px;
	}
	.wp-block-esab-accordion-child.esab__active_accordion {
		border-color: ${(e) => e.activeBorderColor} !important;
	}
	.wp-block-esab-accordion-child.esab__active_accordion .esab__head{
		background: ${(e) => e.headingActiveBgColor} !important;
	}
	.wp-block-esab-accordion-child.esab__active_accordion .esab__heading_tag{
		color: ${(e) => e.headingActiveColor} !important;
	}
	.wp-block-esab-accordion-child.esab__active_accordion .esab__body{
		border-color: ${(e) => e.activeSeparatorColor} !important;
	}
	.wp-block-esab-accordion-child {
		margin-bottom: ${(e) => e.accordionsGap}px;};
	}
	.esab__collapse svg, .esab__expand svg {
		width: ${(e) => e.iconSize}px;
		fill: ${(e) => e.inactiveIconColor};
	}
	.wp-block-esab-accordion-child.esab__active_accordion .esab__expand svg {
		fill: ${(e) => e.activeIconColor};
	}
	.wp-block-esab-accordion-child.esab__active_accordion .esab__body {
		background-color: ${(e) => e.activeBg} !important;
	}
`,
                    Ye = [
                        { label: (0, l.__)("Top", "esab"), value: "top" },
                        { label: (0, l.__)("Right", "esab"), value: "right" },
                        { label: (0, l.__)("Bottom", "esab"), value: "bottom" },
                        { label: (0, l.__)("Left", "esab"), value: "left" },
                    ];
                (0, o.registerBlockType)(n, {
                    icon: {
                        src: (0, r.createElement)(
                            "svg",
                            { width: "24px", height: "24px", viewBox: "0 0 24 24", version: "1.1" },
                            (0, r.createElement)("path", {
                                stroke: "null",
                                id: "svg_2",
                                fill: "#3fa796",
                                d:
                                    "m3.5,1.3333l0,2.52942l17,0l0,-2.52942l-17,0zm16,1.68628l-15,0l0,-0.84314l15,0l0,0.84314zm-16,9.27455l17,0l0,-7.58827l-17,0l0,7.58827zm1,-6.74513l15,0l0,5.90198l-15,0l0,-5.90198zm-1,10.11769l17,0l0,-2.52942l-17,0l0,2.52942zm1,-1.68628l15,0l0,0.84314l-15,0l0,-0.84314z",
                            })
                        ),
                    },
                    edit: function (e) {
                        let { attributes: t, setAttributes: a, clientId: o } = e;
                        const {
                            uniqueId: n,
                            accordionsGap: p,
                            marginTop: u,
                            marginBottom: g,
                            enableLinkedMargin: b,
                            linkedMargin: f,
                            accordionBorderWidth: y,
                            accordionBorderStyle: v,
                            accordionBorderPopOver: _,
                            accordionBorderColor: k,
                            accordionActiveBorderPopOver: C,
                            accordionActiveBorderColor: S,
                            accordionBorderRadius: P,
                            enableBoxShadow: w,
                            boxShadowPalette: E,
                            customColorsPallete: x,
                            headingColorPopOver: B,
                            headingColor: A,
                            headingActiveColorPopOver: O,
                            headingActiveColor: I,
                            headerBgPopOver: $,
                            headerBg: R,
                            headerActiveBgPopOver: T,
                            headerActiveBg: z,
                            enableLinkedHeaderPadding: N,
                            headerSeparator: L,
                            headerSeparatorPopOver: H,
                            headerSeparatorColor: j,
                            headerSeparatorHeight: M,
                            headerSeparatorStyle: D,
                            activeSeparatorPopOver: F,
                            activeSeparatorColor: G,
                            headingTag: W,
                            iconSize: q,
                            activeIconPopOver: V,
                            activeIconColor: Y,
                            inactiveIconPopOver: U,
                            inactiveIconColor: X,
                            iconPosition: Z,
                            collapsedIcon: J,
                            expandedIcon: K,
                            bodyBgPopOver: Q,
                            bodyBg: ee,
                            bodyActiveBgPopOver: te,
                            bodyActiveBg: ae,
                            enableLinkedBodyPadding: re,
                            zindex: oe,
                            anchorId: ne,
                            customClass: ie,
                        } = t;
                        a({ uniqueId: `accordion-${o.slice(0, 8)}` });
                        const le = (e, o, n, i, l) =>
                            (0, r.createElement)(
                                "div",
                                { className: "esab__inputs_group" },
                                (0, r.createElement)("p", { className: "esab__label" }, e),
                                (0, r.createElement)(
                                    "div",
                                    { className: "esab_input__controls" },
                                    Ye.map((e) => {
                                        const n = "margin" === o ? `${o}${e.label}` : `${o}${e.label}Padding`;
                                        return (0, r.createElement)(s.__experimentalNumberControl, {
                                            key: e.value,
                                            label: e.label,
                                            value: i ? t[l] : t[`${n}`],
                                            onChange: (e) => {
                                                a(i ? { [l]: e } : { [`${n}`]: e });
                                            },
                                            labelPosition: "bottom",
                                        });
                                    }),
                                    (0, r.createElement)(
                                        "button",
                                        {
                                            className: "linked_settings " + (i ? "active" : ""),
                                            onClick: () => {
                                                a({ [n]: !i });
                                            },
                                        },
                                        (0, r.createElement)(s.Icon, { icon: i ? "admin-links" : "editor-unlink" })
                                    )
                                )
                            );
                        return (0, r.createElement)(
                            qe,
                            null,
                            (0, r.createElement)(
                                c.InspectorControls,
                                null,
                                (0, r.createElement)(
                                    s.TabPanel,
                                    {
                                        className: "esab__tabs",
                                        activeClass: "active_tab",
                                        initialTabName: "esab__general",
                                        tabs: [
                                            { name: "esab__general", title: (0, l.__)("General", "easy-accordion-block"), className: "esab__tab" },
                                            { name: "esab__style", title: (0, l.__)("Style", "easy-accordion-block"), className: "esab__tab esab__middle" },
                                            { name: "esab__advanced", title: (0, l.__)("Advanced", "easy-accordion-block"), className: "esab__tab" },
                                        ],
                                    },
                                    (e) =>
                                        "esab__general" === e.name
                                            ? (0, r.createElement)(
                                                  qe,
                                                  null,
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { initialOpen: !0, opened: !0 },
                                                      (0, r.createElement)(s.RangeControl, {
                                                          label: (0, l.__)("Accordions Gap", "easy-accordion-block"),
                                                          help: (0, l.__)("Vertical Spacing: ", "easy-accordion-block") + `${p}px`,
                                                          allowReset: !0,
                                                          resetFallbackValue: 10,
                                                          step: 1,
                                                          trackColor: p,
                                                          isShiftStepEnabled: !0,
                                                          value: p,
                                                          onChange: (e) => a({ accordionsGap: e }),
                                                          min: 0,
                                                      })
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Container", "easy-accordion-block"), initialOpen: !1 },
                                                      le((0, l.__)("Margin", "easy-accordion-block"), "margin", "enableLinkedMargin", b, "linkedMargin"),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(s.RangeControl, {
                                                          label: (0, l.__)("Border Width", "easy-accordion-block"),
                                                          help: (0, l.__)("Container Border Width: ", "easy-accordion-block") + `${y}px`,
                                                          allowReset: !0,
                                                          resetFallbackValue: 1,
                                                          step: 1,
                                                          trackColor: k,
                                                          isShiftStepEnabled: !0,
                                                          value: y,
                                                          onChange: (e) => a({ accordionBorderWidth: e }),
                                                          min: 0,
                                                      }),
                                                      y > 0 &&
                                                          (0, r.createElement)(
                                                              "div",
                                                              { className: "esab__border_styles" },
                                                              (0, r.createElement)("p", { className: "esab__label" }, (0, l.__)("Border Style", "easy-accordion-block")),
                                                              (0, r.createElement)(
                                                                  s.ButtonGroup,
                                                                  { "aria-label": (0, l.__)("Border Style", "easy-accordion-block") },
                                                                  (0, r.createElement)(
                                                                      s.Button,
                                                                      { onClick: () => a({ accordionBorderStyle: "solid" }), isPressed: "solid" === v },
                                                                      (0, r.createElement)(
                                                                          "svg",
                                                                          { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-hidden": "true", focusable: "false" },
                                                                          (0, r.createElement)("path", { d: "M5 11.25h14v1.5H5z" })
                                                                      )
                                                                  ),
                                                                  (0, r.createElement)(
                                                                      s.Button,
                                                                      { onClick: () => a({ accordionBorderStyle: "dashed" }), isPressed: "dashed" === v },
                                                                      (0, r.createElement)(
                                                                          "svg",
                                                                          { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-hidden": "true", focusable: "false" },
                                                                          (0, r.createElement)("path", { fillRule: "evenodd", d: "M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z", clipRule: "evenodd" })
                                                                      )
                                                                  ),
                                                                  (0, r.createElement)(
                                                                      s.Button,
                                                                      { onClick: () => a({ accordionBorderStyle: "dotted" }), isPressed: "dotted" === v },
                                                                      (0, r.createElement)(
                                                                          "svg",
                                                                          { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-hidden": "true", focusable: "false" },
                                                                          (0, r.createElement)("path", {
                                                                              fillRule: "evenodd",
                                                                              d: "M5.25 11.25h1.5v1.5h-1.5v-1.5zm3 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5zm1.5 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5z",
                                                                              clipRule: "evenodd",
                                                                          })
                                                                      )
                                                                  )
                                                              )
                                                          ),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(s.RangeControl, {
                                                          label: (0, l.__)("Border Radius", "easy-accordion-block"),
                                                          help: (0, l.__)("Container Border Radius: ", "easy-accordion-block") + `${P}px`,
                                                          allowReset: !0,
                                                          resetFallbackValue: 3,
                                                          step: 1,
                                                          isShiftStepEnabled: !0,
                                                          value: P,
                                                          onChange: (e) => a({ accordionBorderRadius: e }),
                                                          min: 0,
                                                      }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(s.ToggleControl, {
                                                          label: (0, l.__)("Enable Box Shadow", "easy-accordion-block"),
                                                          help: w ? (0, l.__)("Container Box Shadow is enabled", "easy-accordion-block") : (0, l.__)("Container Box Shadow is disabled", "easy-accordion-block"),
                                                          checked: w,
                                                          onChange: () => a({ enableBoxShadow: !w }),
                                                      }),
                                                      w &&
                                                          (0, r.createElement)(
                                                              qe,
                                                              null,
                                                              (0, r.createElement)("p", { className: "esab__label" }, (0, l.__)("Box Shadow Palette", "easy-accordion-block")),
                                                              (0, r.createElement)(
                                                                  s.ButtonGroup,
                                                                  null,
                                                                  (0, r.createElement)(s.Button, { onClick: () => a({ boxShadowPalette: "bs__one" }), isPressed: "bs__one" === E }, (0, l.__)("Pallete 1", "easy-accordion-block")),
                                                                  (0, r.createElement)(s.Button, { onClick: () => a({ boxShadowPalette: "bs__two" }), isPressed: "bs__two" === E }, (0, l.__)("Pallete 2", "easy-accordion-block")),
                                                                  (0, r.createElement)(s.Button, { onClick: () => a({ boxShadowPalette: "bs__three" }), isPressed: "bs__three" === E }, (0, l.__)("Pallete 3", "easy-accordion-block"))
                                                              )
                                                          )
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Head", "easy-accordion-block"), initialOpen: !1 },
                                                      (0, r.createElement)(m, { label: (0, l.__)("Select Tag", "easy-accordion-block"), value: W, onClick: (e) => a({ headingTag: e }) }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      le((0, l.__)("Padding", "easy-accordion-block"), "header", "enableLinkedHeaderPadding", N, "linkedHeaderPadding"),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(s.ToggleControl, {
                                                          label: (0, l.__)("Show Separator", "easy-accordion-block"),
                                                          help: L ? (0, l.__)("Separator is visible", "easy-accordion-block") : (0, l.__)("Separator is hidden", "easy-accordion-block"),
                                                          checked: L,
                                                          onChange: () => a({ headerSeparator: !L }),
                                                      }),
                                                      L &&
                                                          (0, r.createElement)(
                                                              qe,
                                                              null,
                                                              (0, r.createElement)(s.RangeControl, {
                                                                  label: (0, l.__)("Separator Height", "easy-accordion-block"),
                                                                  value: M,
                                                                  onChange: (e) => a({ headerSeparatorHeight: e }),
                                                                  min: 1,
                                                                  max: 100,
                                                                  help: (0, l.__)("Separator Height:", "easy-accordion-block") + ` ${M}px`,
                                                                  resetFallbackValue: 1,
                                                                  allowReset: !0,
                                                              }),
                                                              (0, r.createElement)(
                                                                  "div",
                                                                  { className: "esab__border_styles" },
                                                                  (0, r.createElement)("p", { className: "esab__label" }, (0, l.__)("Separator Style", "easy-accordion-block")),
                                                                  (0, r.createElement)(
                                                                      s.ButtonGroup,
                                                                      null,
                                                                      (0, r.createElement)(
                                                                          s.Button,
                                                                          { onClick: () => a({ headerSeparatorStyle: "solid" }), isPressed: "solid" === D },
                                                                          (0, r.createElement)(
                                                                              "svg",
                                                                              { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-hidden": "true", focusable: "false" },
                                                                              (0, r.createElement)("path", { d: "M5 11.25h14v1.5H5z" })
                                                                          )
                                                                      ),
                                                                      (0, r.createElement)(
                                                                          s.Button,
                                                                          { onClick: () => a({ headerSeparatorStyle: "dashed" }), isPressed: "dashed" === D },
                                                                          (0, r.createElement)(
                                                                              "svg",
                                                                              { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-hidden": "true", focusable: "false" },
                                                                              (0, r.createElement)("path", { fillRule: "evenodd", d: "M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z", clipRule: "evenodd" })
                                                                          )
                                                                      ),
                                                                      (0, r.createElement)(
                                                                          s.Button,
                                                                          { onClick: () => a({ headerSeparatorStyle: "dotted" }), isPressed: "dotted" === D },
                                                                          (0, r.createElement)(
                                                                              "svg",
                                                                              { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-hidden": "true", focusable: "false" },
                                                                              (0, r.createElement)("path", {
                                                                                  fillRule: "evenodd",
                                                                                  d: "M5.25 11.25h1.5v1.5h-1.5v-1.5zm3 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5zm1.5 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5z",
                                                                                  clipRule: "evenodd",
                                                                              })
                                                                          )
                                                                      )
                                                                  )
                                                              )
                                                          )
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Icons", "easy-accordion-block"), initialOpen: !1 },
                                                      (0, r.createElement)(s.RangeControl, {
                                                          label: (0, l.__)("Icon Size", "easy-accordion-block"),
                                                          help: (0, l.__)("Accordion Icons Size: ", "easy-accordion-block") + `${q}px`,
                                                          allowReset: !0,
                                                          resetFallbackValue: 20,
                                                          step: 1,
                                                          isShiftStepEnabled: !0,
                                                          value: q,
                                                          onChange: (e) => a({ iconSize: e }),
                                                          min: 0,
                                                          max: 35,
                                                      }),
                                                      (0, r.createElement)(s.ToggleControl, {
                                                          label: (0, l.__)("Icon Reverse Position", "easy-accordion-block"),
                                                          help: Z ? (0, l.__)("Icon is on the Left Side", "easy-accordion-block") : (0, l.__)("Icon is on the Right Side", "easy-accordion-block"),
                                                          checked: Z,
                                                          onChange: () => a({ iconPosition: !Z }),
                                                      }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)("p", { className: "esab__label" }, (0, l.__)("Active Icon", "easy-accordion-block")),
                                                      (0, r.createElement)(
                                                          "div",
                                                          { className: "esab__icons_panel" },
                                                          (0, r.createElement)(
                                                              s.ButtonGroup,
                                                              null,
                                                              Object.keys(d).map((e) => (0, r.createElement)(s.Button, { key: e, onClick: () => a({ expandedIcon: e }), isPressed: K === e }, d[e]))
                                                          )
                                                      ),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)("p", { className: "esab__label" }, (0, l.__)("Inactive Icon", "easy-accordion-block")),
                                                      (0, r.createElement)(
                                                          "div",
                                                          { className: "esab__icons_panel" },
                                                          (0, r.createElement)(
                                                              s.ButtonGroup,
                                                              null,
                                                              Object.keys(d).map((e) => (0, r.createElement)(s.Button, { key: e, onClick: () => a({ collapsedIcon: e }), isPressed: J === e }, d[e]))
                                                          )
                                                      )
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Body", "easy-accordion-block"), initialOpen: !1 },
                                                      le((0, l.__)("Padding", "easy-accordion-block"), "body", "enableLinkedBodyPadding", re, "linkedBodyPadding")
                                                  )
                                              )
                                            : "esab__style" === e.name
                                            ? (0, r.createElement)(
                                                  qe,
                                                  null,
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { initialOpen: !0, opened: !0 },
                                                      (0, r.createElement)(s.ToggleControl, {
                                                          label: (0, l.__)("Use Custom Colors Palette", "easy-accordion-block"),
                                                          help: x ? (0, l.__)("You are using custom colors palette.", "easy-accordion-block") : (0, l.__)("You are using Your Theme colors palette.", "easy-accordion-block"),
                                                          checked: x,
                                                          onChange: () => a({ customColorsPallete: !x }),
                                                      })
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Container", "easy-accordion-block"), initialOpen: !1 },
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Border Color", "easy-accordion-block"),
                                                          value: k,
                                                          onChange: (e) => a({ accordionBorderColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: _,
                                                          setPopOver: () => a({ accordionBorderPopOver: !_ }),
                                                          clearable: !1,
                                                      }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Active Border Color", "easy-accordion-block"),
                                                          value: S,
                                                          onChange: (e) => a({ accordionActiveBorderColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: C,
                                                          setPopOver: () => a({ accordionActiveBorderPopOver: !C }),
                                                          clearable: !1,
                                                      })
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Head"), initialOpen: !1 },
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Text Color", "easy-accordion-block"),
                                                          value: A,
                                                          onChange: (e) => a({ headingColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: B,
                                                          setPopOver: () => a({ headingColorPopOver: !B }),
                                                          clearable: !0,
                                                      }),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Background Color", "easy-accordion-block"),
                                                          value: R,
                                                          onChange: (e) => a({ headerBg: e }),
                                                          enableCustomColors: x,
                                                          popOver: $,
                                                          setPopOver: () => a({ headerBgPopOver: !$ }),
                                                          clearable: !0,
                                                      }),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Separator Color", "easy-accordion-block"),
                                                          value: j,
                                                          onChange: (e) => a({ headerSeparatorColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: H,
                                                          setPopOver: () => a({ headerSeparatorPopOver: !H }),
                                                          clearable: !1,
                                                      }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Active Text Color", "easy-accordion-block"),
                                                          value: I,
                                                          onChange: (e) => a({ headingActiveColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: O,
                                                          setPopOver: () => a({ headingActiveColorPopOver: !O }),
                                                          clearable: !0,
                                                      }),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Active Background Color", "easy-accordion-block"),
                                                          value: z,
                                                          onChange: (e) => a({ headerActiveBg: e }),
                                                          enableCustomColors: x,
                                                          popOver: T,
                                                          setPopOver: () => a({ headerActiveBgPopOver: !T }),
                                                          clearable: !0,
                                                      }),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Active Separator Color", "easy-accordion-block"),
                                                          value: G,
                                                          onChange: (e) => a({ activeSeparatorColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: F,
                                                          setPopOver: () => a({ activeSeparatorPopOver: !F }),
                                                          clearable: !1,
                                                      })
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Icons", "easy-accordion-block"), initialOpen: !1 },
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Inactive Icon Color", "easy-accordion-block"),
                                                          value: X,
                                                          onChange: (e) => a({ inactiveIconColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: U,
                                                          setPopOver: () => a({ inactiveIconPopOver: !U }),
                                                          clearable: !0,
                                                      }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Active Icon Color", "easy-accordion-block"),
                                                          value: Y,
                                                          onChange: (e) => a({ activeIconColor: e }),
                                                          enableCustomColors: x,
                                                          popOver: V,
                                                          setPopOver: () => a({ activeIconPopOver: !V }),
                                                          clearable: !0,
                                                      })
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Accordion Body", "easy-accordion-block"), initialOpen: !1 },
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Background Color", "easy-accordion-block"),
                                                          value: ee,
                                                          onChange: (e) => a({ bodyBg: e }),
                                                          enableCustomColors: x,
                                                          popOver: Q,
                                                          setPopOver: () => a({ bodyBgPopOver: !Q }),
                                                          clearable: !0,
                                                      }),
                                                      (0, r.createElement)(s.CardDivider, null),
                                                      (0, r.createElement)(h, {
                                                          label: (0, l.__)("Active Background Color", "easy-accordion-block"),
                                                          value: ae,
                                                          onChange: (e) => a({ bodyActiveBg: e }),
                                                          enableCustomColors: x,
                                                          popOver: te,
                                                          setPopOver: () => a({ bodyActiveBgPopOver: !te }),
                                                          clearable: !0,
                                                      })
                                                  )
                                              )
                                            : "esab__advanced" === e.name
                                            ? (0, r.createElement)(
                                                  qe,
                                                  null,
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { initialOpen: !0, opened: !0 },
                                                      (0, r.createElement)(s.RangeControl, {
                                                          label: (0, l.__)("Z-Index", "easy-accordion-block"),
                                                          step: 1,
                                                          value: oe,
                                                          onChange: (e) => a({ zindex: e }),
                                                          min: -100,
                                                          resetFallbackValue: null,
                                                          allowReset: !0,
                                                          help: (0, l.__)(
                                                              "Z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.",
                                                              "easy-accordion-block"
                                                          ),
                                                      })
                                                  ),
                                                  (0, r.createElement)(
                                                      s.PanelBody,
                                                      { title: (0, l.__)("Miscellaneous", "easy-accordion-block"), initialOpen: !1 },
                                                      (0, r.createElement)(s.TextControl, {
                                                          label: (0, l.__)("HTML Anchor ID", "easy-accordion-block"),
                                                          value: ne,
                                                          onChange: (e) => a({ anchorId: e.replace(/[^a-zA-Z0-9_-]/g, "-") }),
                                                          help: (0, l.__)("Anchor ID lets you link directly to a section on a page.", "easy-accordion-block"),
                                                      }),
                                                      (0, r.createElement)(s.TextControl, {
                                                          label: (0, l.__)("Additional Class (es)", "easy-accordion-block"),
                                                          value: ie,
                                                          onChange: (e) => a({ customClass: e }),
                                                          help: (0, l.__)("Use space to separate multiple classes.", "easy-accordion-block"),
                                                      })
                                                  )
                                              )
                                            : void 0
                                )
                            ),
                            (0, r.createElement)(
                                Ve,
                                i({}, (0, c.useBlockProps)({ className: `${ie || ""}` }), {
                                    accordionsGap: p,
                                    accordionBorderRadius: P,
                                    iconSize: q,
                                    inactiveIconColor: X,
                                    activeIconColor: Y,
                                    marginTop: b ? f : u,
                                    marginBottom: b ? f : g,
                                    zindex: oe,
                                    activeBorderColor: S,
                                    headingActiveColor: I,
                                    headingActiveBgColor: z,
                                    activeSeparatorColor: G,
                                    activeBg: ae,
                                }),
                                (0, r.createElement)(c.InnerBlocks, { allowedBlocks: ["esab/accordion-child"], template: [["esab/accordion-child"]], renderAppender: () => (0, r.createElement)(c.InnerBlocks.ButtonBlockAppender, null) })
                            )
                        );
                    },
                    save: function (e) {
                        let { attributes: t } = e;
                        const { uniqueId: a, accordionsGap: o, marginTop: n, marginRight: l, marginBottom: s, marginLeft: d, enableLinkedMargin: p, linkedMargin: u, anchorId: h, customClass: g } = t;
                        return (0, r.createElement)(
                            "div",
                            i({}, c.useBlockProps.save({ className: `${a} ${g || ""}` }), { id: h || null }),
                            (0, r.createElement)("div", { className: "esab__container", style: { rowGap: `${o}px`, margin: p ? `${u}px` : `${n}px ${l}px ${s}px ${d}px` } }, (0, r.createElement)(c.InnerBlocks.Content, null))
                        );
                    },
                });
            },
            679: (e, t, a) => {
                "use strict";
                var r = a(296),
                    o = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
                    n = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
                    i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
                    l = {};
                function c(e) {
                    return r.isMemo(e) ? i : l[e.$$typeof] || o;
                }
                (l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (l[r.Memo] = i);
                var s = Object.defineProperty,
                    d = Object.getOwnPropertyNames,
                    p = Object.getOwnPropertySymbols,
                    u = Object.getOwnPropertyDescriptor,
                    h = Object.getPrototypeOf,
                    g = Object.prototype;
                e.exports = function e(t, a, r) {
                    if ("string" != typeof a) {
                        if (g) {
                            var o = h(a);
                            o && o !== g && e(t, o, r);
                        }
                        var i = d(a);
                        p && (i = i.concat(p(a)));
                        for (var l = c(t), b = c(a), f = 0; f < i.length; ++f) {
                            var m = i[f];
                            if (!(n[m] || (r && r[m]) || (b && b[m]) || (l && l[m]))) {
                                var y = u(a, m);
                                try {
                                    s(t, m, y);
                                } catch (e) {}
                            }
                        }
                    }
                    return t;
                };
            },
            103: (e, t) => {
                "use strict";
                var a = "function" == typeof Symbol && Symbol.for,
                    r = a ? Symbol.for("react.element") : 60103,
                    o = a ? Symbol.for("react.portal") : 60106,
                    n = a ? Symbol.for("react.fragment") : 60107,
                    i = a ? Symbol.for("react.strict_mode") : 60108,
                    l = a ? Symbol.for("react.profiler") : 60114,
                    c = a ? Symbol.for("react.provider") : 60109,
                    s = a ? Symbol.for("react.context") : 60110,
                    d = a ? Symbol.for("react.async_mode") : 60111,
                    p = a ? Symbol.for("react.concurrent_mode") : 60111,
                    u = a ? Symbol.for("react.forward_ref") : 60112,
                    h = a ? Symbol.for("react.suspense") : 60113,
                    g = a ? Symbol.for("react.suspense_list") : 60120,
                    b = a ? Symbol.for("react.memo") : 60115,
                    f = a ? Symbol.for("react.lazy") : 60116,
                    m = a ? Symbol.for("react.block") : 60121,
                    y = a ? Symbol.for("react.fundamental") : 60117,
                    v = a ? Symbol.for("react.responder") : 60118,
                    _ = a ? Symbol.for("react.scope") : 60119;
                function k(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch ((e = e.type)) {
                                    case d:
                                    case p:
                                    case n:
                                    case l:
                                    case i:
                                    case h:
                                        return e;
                                    default:
                                        switch ((e = e && e.$$typeof)) {
                                            case s:
                                            case u:
                                            case f:
                                            case b:
                                            case c:
                                                return e;
                                            default:
                                                return t;
                                        }
                                }
                            case o:
                                return t;
                        }
                    }
                }
                function C(e) {
                    return k(e) === p;
                }
                (t.AsyncMode = d),
                    (t.ConcurrentMode = p),
                    (t.ContextConsumer = s),
                    (t.ContextProvider = c),
                    (t.Element = r),
                    (t.ForwardRef = u),
                    (t.Fragment = n),
                    (t.Lazy = f),
                    (t.Memo = b),
                    (t.Portal = o),
                    (t.Profiler = l),
                    (t.StrictMode = i),
                    (t.Suspense = h),
                    (t.isAsyncMode = function (e) {
                        return C(e) || k(e) === d;
                    }),
                    (t.isConcurrentMode = C),
                    (t.isContextConsumer = function (e) {
                        return k(e) === s;
                    }),
                    (t.isContextProvider = function (e) {
                        return k(e) === c;
                    }),
                    (t.isElement = function (e) {
                        return "object" == typeof e && null !== e && e.$$typeof === r;
                    }),
                    (t.isForwardRef = function (e) {
                        return k(e) === u;
                    }),
                    (t.isFragment = function (e) {
                        return k(e) === n;
                    }),
                    (t.isLazy = function (e) {
                        return k(e) === f;
                    }),
                    (t.isMemo = function (e) {
                        return k(e) === b;
                    }),
                    (t.isPortal = function (e) {
                        return k(e) === o;
                    }),
                    (t.isProfiler = function (e) {
                        return k(e) === l;
                    }),
                    (t.isStrictMode = function (e) {
                        return k(e) === i;
                    }),
                    (t.isSuspense = function (e) {
                        return k(e) === h;
                    }),
                    (t.isValidElementType = function (e) {
                        return (
                            "string" == typeof e ||
                            "function" == typeof e ||
                            e === n ||
                            e === p ||
                            e === l ||
                            e === i ||
                            e === h ||
                            e === g ||
                            ("object" == typeof e &&
                                null !== e &&
                                (e.$$typeof === f || e.$$typeof === b || e.$$typeof === c || e.$$typeof === s || e.$$typeof === u || e.$$typeof === y || e.$$typeof === v || e.$$typeof === _ || e.$$typeof === m))
                        );
                    }),
                    (t.typeOf = k);
            },
            296: (e, t, a) => {
                "use strict";
                e.exports = a(103);
            },
            921: (e, t) => {
                "use strict";
                var a = 60103,
                    r = 60106,
                    o = 60107,
                    n = 60108,
                    i = 60114,
                    l = 60109,
                    c = 60110,
                    s = 60112,
                    d = 60113,
                    p = 60120,
                    u = 60115,
                    h = 60116,
                    g = 60121,
                    b = 60122,
                    f = 60117,
                    m = 60129,
                    y = 60131;
                if ("function" == typeof Symbol && Symbol.for) {
                    var v = Symbol.for;
                    (a = v("react.element")),
                        (r = v("react.portal")),
                        (o = v("react.fragment")),
                        (n = v("react.strict_mode")),
                        (i = v("react.profiler")),
                        (l = v("react.provider")),
                        (c = v("react.context")),
                        (s = v("react.forward_ref")),
                        (d = v("react.suspense")),
                        (p = v("react.suspense_list")),
                        (u = v("react.memo")),
                        (h = v("react.lazy")),
                        (g = v("react.block")),
                        (b = v("react.server.block")),
                        (f = v("react.fundamental")),
                        (m = v("react.debug_trace_mode")),
                        (y = v("react.legacy_hidden"));
                }
                (t.isValidElementType = function (e) {
                    return (
                        "string" == typeof e ||
                        "function" == typeof e ||
                        e === o ||
                        e === i ||
                        e === m ||
                        e === n ||
                        e === d ||
                        e === p ||
                        e === y ||
                        ("object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === u || e.$$typeof === l || e.$$typeof === c || e.$$typeof === s || e.$$typeof === f || e.$$typeof === g || e[0] === b))
                    );
                }),
                    (t.typeOf = function (e) {
                        if ("object" == typeof e && null !== e) {
                            var t = e.$$typeof;
                            switch (t) {
                                case a:
                                    switch ((e = e.type)) {
                                        case o:
                                        case i:
                                        case n:
                                        case d:
                                        case p:
                                            return e;
                                        default:
                                            switch ((e = e && e.$$typeof)) {
                                                case c:
                                                case s:
                                                case h:
                                                case u:
                                                case l:
                                                    return e;
                                                default:
                                                    return t;
                                            }
                                    }
                                case r:
                                    return t;
                            }
                        }
                    });
            },
            864: (e, t, a) => {
                "use strict";
                e.exports = a(921);
            },
            774: (e) => {
                e.exports = function (e, t, a, r) {
                    var o = a ? a.call(r, e, t) : void 0;
                    if (void 0 !== o) return !!o;
                    if (e === t) return !0;
                    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                    var n = Object.keys(e),
                        i = Object.keys(t);
                    if (n.length !== i.length) return !1;
                    for (var l = Object.prototype.hasOwnProperty.bind(t), c = 0; c < n.length; c++) {
                        var s = n[c];
                        if (!l(s)) return !1;
                        var d = e[s],
                            p = t[s];
                        if (!1 === (o = a ? a.call(r, d, p, s) : void 0) || (void 0 === o && d !== p)) return !1;
                    }
                    return !0;
                };
            },
        },
        a = {};
    function r(e) {
        var o = a[e];
        if (void 0 !== o) return o.exports;
        var n = (a[e] = { exports: {} });
        return t[e](n, n.exports, r), n.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, a, o, n) => {
            if (!a) {
                var i = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    (a = e[d][0]), (o = e[d][1]), (n = e[d][2]);
                    for (var l = !0, c = 0; c < a.length; c++) (!1 & n || i >= n) && Object.keys(r.O).every((e) => r.O[e](a[c])) ? a.splice(c--, 1) : ((l = !1), n < i && (i = n));
                    if (l) {
                        e.splice(d--, 1);
                        var s = o();
                        void 0 !== s && (t = s);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [a, o, n];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            var e = { 971: 0, 458: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var o,
                        n,
                        i = a[0],
                        l = a[1],
                        c = a[2],
                        s = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in l) r.o(l, o) && (r.m[o] = l[o]);
                        if (c) var d = c(r);
                    }
                    for (t && t(a); s < i.length; s++) (n = i[s]), r.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return r.O(d);
                },
                a = (self.webpackChunkboilerplate = self.webpackChunkboilerplate || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var o = r.O(void 0, [458], () => r(95));
    o = r.O(o);
})();
