"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/footers/main-footer.json
const main_footer_namespaceObject = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"Ok":[{"title":"Company","url":""},{"title":"Team","url":""},{"title":"Services","url":""},{"title":"Products","url":""}],"aC":[{"url":"","image":"img/blog/c3.jpg","title":"Solar Energy Project"},{"url":"","image":"img/blog/c1.jpg","title":"How to check the website before releasing it?"}],"Lk":"USA — 19266 Coastal Hwy, Rehoboth Beach, Delaware","Do":"admin@cleanstarenergyusa.com","m7":"+1(302)612-8648","Qz":{"u":"Clean Star Energy LLC","H":"https://www.cleanstarenergyusa.com"}}');
;// CONCATENATED MODULE: ./src/components/Footers/MainFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ footerClass , footerBg , business , creative  })=>{
    const footerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
    }, [
        creative
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: footerClass,
        style: {
            backgroundImage: footerBg ? "url('img/background/8.jpg')" : "url('')"
        },
        ref: footerRef,
        children: [
            footerBg ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cal pb-80 pt-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cont",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "sub-title gr-green-text",
                                            children: "Stay Connected"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "fz-50",
                                            children: "Partner with us!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mt-5 fw-300 fz-20",
                                            children: "Let\u2019s build the next big thing together"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5 d-flex justify-content-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/cleanstarenergy-contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "butn butn-md butn-rounded butn-light mt-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Get In Touch"
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container pt-80 pb-80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `img/logo-${creative ? "dark" : "light"}.png`,
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Stay ahead in the rapidly evolving world and Benefit from our team with extensive experience and expertise"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social circle-bord mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "rest horizontal-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.qv,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.km,
                                                        className: "ms-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.ZB,
                                                        className: "ms-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "cmp-links",
                                        children: main_footer_namespaceObject.Ok.map((link, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: link.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: link.title
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "Office"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "address",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "adrs mb-15",
                                                children: main_footer_namespaceObject.Lk
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "eml underline mb-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "",
                                                    children: main_footer_namespaceObject.Do
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "tel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: `${business ? "gr-green-text" : creative ? "" : "gr-purple-red-text"}`,
                                                    children: main_footer_namespaceObject.m7
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "Recent Posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "rc-post",
                                        children: main_footer_namespaceObject.aC.map((post, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: `flex ${idx !== main_footer_namespaceObject.aC.length - 1 ? "mb-30" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: post.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "fz-16 line-height-28",
                                                                    children: post.title
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${footerBg ? "sub-footer pb-50 pt-0 no-bord" : creative ? "sub-footer pb-50 pt-50" : "sub-footer pb-50"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "horizontal-link fz-13",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Privacy policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Legal notice"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Terms of service"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyrights d-flex justify-content-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "fz-13",
                                        children: [
                                            "\xa9 2025 www.cleanstarenergyusa.com is Proudly Powered by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: main_footer_namespaceObject.Qz.H,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    className: `${business ? "gr-green-text" : creative ? "" : "gr-purple-red-text"} ms-1`,
                                                    children: main_footer_namespaceObject.Qz.u
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const MainFooter = (Footer);


/***/ })

};
;