"use strict";
exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 9008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DigitalFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/footers/digital-footer.json
const digital_footer_namespaceObject = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"bc":[{"url":"https://www.cleanstarenergyusa.com/","image":"img/insta/1.jpg"},{"url":"https://www.cleanstarenergyusa.com/","image":"img/insta/2.jpg"},{"url":"https://www.cleanstarenergyusa.com/","image":"img/insta/3.jpg"},{"url":"https://www.cleanstarenergyusa.com/","image":"img/insta/4.jpg"},{"url":"https://www.cleanstarenergyusa.com/","image":"img/insta/5.jpg"},{"url":"https://www.cleanstarenergyusa.com/","image":"img/insta/6.jpg"}],"Lk":"USA — 19266 Coastal Hwy, Rehoboth Beach, Delaware","Do":"admin@cleanstarenergyusa.com","m7":"+1(302)612-8648","Qz":{"u":"Clean Star Energy LLC","H":"https://www.cleanstarenergyusa.com/"}}');
;// CONCATENATED MODULE: ./src/components/Footers/DigitalFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ footerClass , type  })=>{
    (0,external_react_.useEffect)(()=>{
        let bgImg = document.querySelector("footer .full-over.bg-img");
        bgImg.style.backgroundImage = `url(${bgImg.getAttribute("data-background")})`;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: footerClass,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `container ${type == "purple-light" ? "mb-40 to-up" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `call-action-banner pt-60 pb-60 position-re radius-30 ${type == "purple-light" ? "gr-blue2-bg" : "mb-100"} ${type == "purple-red" ? "gr-purple-red-bg" : ""}`,
                    "data-overlay-dark": "0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row position-re ontop",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "sub-title fw-400",
                                                children: "Already interested!"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "fw-800",
                                                children: "Don\u2018t wait and start now !"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-light",
                                                children: "Tell us your vision, and we\u2018ll get in touch with next steps."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5 valign",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "call-button full-width d-flex justify-content-end",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#0",
                                            className: "butn butn-md bg-light radius-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text text-dark slide-up",
                                                    children: "Get Started"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text text-dark slide-down",
                                                    children: "Get Started"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "full-over bg-img opacity-3 radius-30",
                            "data-background": "img/patterns/call-action.png"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
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
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "landing-preview.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/logo-dark.png",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Stay ahead in the rapidly evolving world and Benefit from our team with extensive experience and expertise."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social circle-bord mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "rest horizontal-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.qv,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.km,
                                                        className: "ms-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.ZB,
                                                        className: "ms-2",
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
                            className: "col-lg-4 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title fw-700 mb-30",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "address rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "adrs mb-15",
                                                children: digital_footer_namespaceObject.Lk
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "eml underline mb-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: digital_footer_namespaceObject.Do
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "tel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: `${type == "purple-red" ? "gr-purple-red-text" : ""} ${type == "purple-light" ? "gr-blue2-text" : ""}`,
                                                    children: digital_footer_namespaceObject.m7
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title fw-700 mb-30",
                                        children: "Instagram"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "insta flex mb-20 rest",
                                        children: digital_footer_namespaceObject.bc.map((post, idx)=>idx < 3 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${idx !== 2 ? "mr-20" : ""} full-width`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.image,
                                                        alt: ""
                                                    })
                                                })
                                            }, idx)
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "insta flex rest",
                                        children: digital_footer_namespaceObject.bc.map((post, idx)=>idx >= 3 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${idx !== 5 ? "mr-20" : ""} full-width`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.image,
                                                        alt: ""
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
                className: "sub-footer pt-50",
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
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Privacy policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Legal notice"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
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
                                            "\xa9 2025 Clean Star Energy llc is Proudly Powered by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: digital_footer_namespaceObject.Qz.H,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    className: `ms-1 ${type == "purple-red" ? "gr-purple-red-text" : ""} ${type == "purple-light" ? "gr-blue2-text" : ""}`,
                                                    children: digital_footer_namespaceObject.Qz.u
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            type == "purple-light" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wave-1 top revers-x bg-img",
                style: {
                    backgroundImage: "url('img/waves/wave-white2.svg')"
                }
            }) : null
        ]
    });
};
/* harmony default export */ const DigitalFooter = (Footer);


/***/ }),

/***/ 2381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @next/next/no-img-element */ 



const About = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section-padding pt-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "intro-two-img full-width md-mb50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/about/th2.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "img2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/about/th3.jpg",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "play-button",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: "https://youtu.be/",
                                                    className: "btn vid",
                                                    onClick: openVideo,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "100px",
                                                            height: "100px",
                                                            viewBox: "0 0 100 100",
                                                            preserveAspectRatio: "none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                className: "circle",
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "48",
                                                                stroke: "white",
                                                                strokeWidth: "2",
                                                                fill: "none"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-play"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "award-icon",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "star mb-20",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "img/waves/star.png",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "icon pe-7s-medal"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: "100%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "verified"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content pl-50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sub-head radius fz-12 ls2 text-u mb-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Highly expertise"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "mb-20 fw-800",
                                        children: [
                                            "where we specialize in your projects,",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "gr-purple-red-text",
                                                children: "When you need a structure"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "legal support, technical advising, or marketing. Our team is here to develop the best solutions tailored to your needs."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "check-list rest mt-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon bg-gray mr-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-check"
                                                        })
                                                    }),
                                                    "we provide end-to-end solutions aligned with your vision"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "mb-10",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon bg-gray mr-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-check"
                                                        })
                                                    }),
                                                    "From specific issues to large-scale project"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon bg-gray mr-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-check"
                                                        })
                                                    }),
                                                    "Our seasoned specialists offer top-notch professional advice"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/cleanstarenergy-about",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "butn butn-md gr-purple-red-bg text-light radius-30 mt-30",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text slide-up",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text slide-down",
                                                    children: "About Us"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 2433:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/main/blog2.json
const blog2_namespaceObject = [];
;// CONCATENATED MODULE: ./src/components/Main/Blog2/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const Blog = ({ grblue  })=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "blog-grid section-padding",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row mb-100",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-7",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "simple-head",
                                children: [
                                    /*#__PURE__*/ _jsx("h6", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "articles"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx("h2", {
                                            className: `fz-40 ${grblue ? "fw-700" : "fw-800 gr-purple-red-text inline"}`,
                                            children: "Latest News"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-md-5 justify-content-end valign",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "s-title valign ml-auto",
                                children: /*#__PURE__*/ _jsxs("h6", {
                                    children: [
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "blog-grid-modern.html",
                                            children: "Read all news"
                                        }),
                                        /*#__PURE__*/ _jsx("i", {
                                            className: "icon fz-20 pe-7s-angle-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: blogs.map((blog, idx)=>/*#__PURE__*/ _jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "item box-shadow crv",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "img",
                                        children: [
                                            /*#__PURE__*/ _jsx("img", {
                                                src: blog.image,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "tags",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/blog-grid-clean",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: blog.tag
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "author",
                                                        children: /*#__PURE__*/ _jsx("span", {
                                                            children: blog.author
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "date",
                                                        children: /*#__PURE__*/ _jsx("span", {
                                                            className: `${grblue ? "gr-blue-text" : "gr-purple-red-text"}`,
                                                            children: blog.date
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "title",
                                                children: /*#__PURE__*/ _jsx("h5", {
                                                    className: "fw-700 fz-18",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/blog-post",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            children: blog.title
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Blog2 = ((/* unused pure expression or super */ null && (Blog)));


/***/ }),

/***/ 87:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8028);
/* harmony import */ var _data_main_clients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8394);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 


const Clients = ({ slides  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "clients-carsouel shad up",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container radius-15",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-2 sm-hide",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "item flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon-flex mr-20",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "fz-40",
                                        children: [
                                            "42",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cont-flex valign",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-left fz-13 fw-500",
                                            children: [
                                                "Side ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Partners"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-10 valign",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                            id: "content-carousel-container-unq-2",
                            className: "swiper-container",
                            slidesPerView: slides ? 5 : 4,
                            spaceBetween: 0,
                            speed: 1000,
                            loop: true,
                            breakpoints: {
                                0: {
                                    slidesPerView: 3
                                },
                                640: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 3
                                },
                                1024: {
                                    slidesPerView: slides ? 5 : 4
                                }
                            },
                            children: _data_main_clients_json__WEBPACK_IMPORTED_MODULE_3__.map((brand, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "img",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: brand.image,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        className: "link",
                                                        "data-splitting": true,
                                                        children: brand.title
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, idx)
                            )
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3047);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_4__);





const particlesOptions = {
    fullScreen: false,
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: [
                "#ff5e57",
                "#409fff",
                "#50E3C2",
                "#E86363"
            ]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 8,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#23262D",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 7,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};
const Header = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let bgImg = document.querySelector("header.full-height .bg-img");
        bgImg.style.backgroundImage = `url(${bgImg.getAttribute("data-background")})`;
    }, []);
    const particlesInit = async (main)=>{
        await (0,tsparticles__WEBPACK_IMPORTED_MODULE_4__.loadFull)(main);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "full-height rshp valign",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "front bg-img",
                "data-background": "img/slider/shape.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container ontop",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sub-head radius mb-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "data analytics is inevitable"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "fw-800 fz-45",
                                    children: [
                                        "Union of new layers",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "of blockchain from ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "experts"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Proven Expertise With a track record of success ensuring your venture is legally sound and technologically"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-40 flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/cleanstarenergy-contact",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "butn butn-md gr-purple-red-bg text-light radius-30",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text slide-up",
                                                        children: "Our Services"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text slide-down",
                                                        children: "Our Services"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default()), {
                id: "particles-js",
                init: particlesInit,
                options: particlesOptions
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 5871:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/main/portfolio2.json
const portfolio2_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/Main/Portfolio2/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const Portfolio = ()=>{
    useEffect(()=>{
        setTimeout(()=>{
            initIsotope();
        }, 500);
    }, []);
    return /*#__PURE__*/ _jsxs("section", {
        className: "portfolio section-padding bg-gray",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "row mb-80",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "simple-head",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            children: /*#__PURE__*/ _jsx("h6", {
                                                className: "sub-head radius mb-20",
                                                children: /*#__PURE__*/ _jsx("span", {
                                                    className: "fz-12 ls2 text-u",
                                                    children: "Showcases"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("h2", {
                                            className: "fz-40 fw-800 gr-purple-red-text inline",
                                            children: "Recent Projects."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "col-lg-7 d-flex justify-content-end",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "filtering text-center d-flex align-items-end",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "filter",
                                        children: portfolio.filters.map((filter, idx)=>/*#__PURE__*/ _jsx("span", {
                                                "data-filter": filter.operator,
                                                className: `${idx === 0 ? "active" : ""}`,
                                                children: filter.name
                                            }, idx)
                                        )
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "gallery min-30",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: portfolio.images.map((image, idx)=>/*#__PURE__*/ _jsxs("div", {
                                    className: `col-lg-4 col-md-6 items ${image.filter} wow fadeInUp`,
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/project-details",
                                                children: /*#__PURE__*/ _jsxs("a", {
                                                    className: "imago wow",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("img", {
                                                            src: image.url,
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "item-img-overlay gr-purple-red-bg",
                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                className: "fas fa-arrow-right icon text-light fz-20"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "cont mt-30 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("h6", {
                                                    className: "fw-700 fz-17 mb-5",
                                                    children: image.title
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "fw-500",
                                                    children: image.type
                                                })
                                            ]
                                        })
                                    ]
                                }, idx)
                            )
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "curve-cls bottom",
                children: /*#__PURE__*/ _jsx("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 500 250",
                    enableBackground: "new 0 0 500 250",
                    xmlSpace: "preserve",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ _jsx("path", {
                        fill: "#23262D",
                        d: "M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Portfolio2 = ((/* unused pure expression or super */ null && (Portfolio)));


/***/ }),

/***/ 9453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Process2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/main/process2.json
const process2_namespaceObject = JSON.parse('[{"numb":"01","icon":"pe-7s-mouse","title":"Research Project","details":"Comprehensive Support from initial concept."},{"numb":"02","icon":"pe-7s-rocket","title":"Targeting","details":"Innovative Solutions to streamline processes."},{"numb":"03","icon":"pe-7s-like2","title":"Result","details":"Expert Guidance to your project\'s success."}]');
;// CONCATENATED MODULE: ./src/components/Main/Process2/index.jsx


const Process = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "process-simp section-padding bg-gray position-re pb-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "simple-head md-mb10 mb-80 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "sub-head radius mb-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fz-12 ls2 text-u",
                                children: "Our Process"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fz-40 fw-800 gr-purple-red-text inline",
                        children: "How It Works"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: process2_namespaceObject.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `item ${idx !== process2_namespaceObject.length - 1 ? "md-mb50" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "step mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "numb",
                                                children: item.numb
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `icon ${item.icon} bg-gray`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-10 fw-700",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: item.details
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "curve-cls top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 500 250",
                    enableBackground: "new 0 0 500 250",
                    xmlSpace: "preserve",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#23262D",
                        d: "M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Process2 = (Process);


/***/ }),

/***/ 8506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8028);
;// CONCATENATED MODULE: ./src/data/main/services2.json
const services2_namespaceObject = JSON.parse('[{"icon":"pe-7s-arc","title":"Mining Cryptocurrencies","details":"Robust Legal Structure, We help you build a solid legal foundation for your crypto ventures."},{"icon":"pe-7s-paint-bucket","title":"Data Analitics","details":"Actionable Insights Transform raw data into actionable insights that help you stay ahead in today\'s competitive market."},{"icon":"pe-7s-vector","title":"Solar Energy Project","details":"Expert Guidance Benefit from our team\'s extensive experience and expertise in both renewable energy and advanced technology solutions."}]');
;// CONCATENATED MODULE: ./src/components/Main/Services2/index.jsx




const Services = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services section-padding pt-60",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: services2_namespaceObject.map((service, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-flex mr-20",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fz-40 bg-shape icon",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `icon-font ${service.icon} gr-purple-red-text`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "svg-shape",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    viewBox: "0 0 500 500",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                    width: "100%",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M450.5,328Q436,406,359,419.5Q282,433,210,439Q138,445,88,386Q38,327,51,254.5Q64,182,104.5,124.5Q145,67,214,63.5Q283,60,343.5,90.5Q404,121,434.5,185.5Q465,250,450.5,328Z",
                                                        fill: "#fafafa"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cont-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "mb-10 fw-700",
                                            children: service.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "fz-14",
                                            children: service.details
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/cleanstarenergy-contact",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "more-arow mt-20",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "sp-hover",
                                                            "data-splitting": true,
                                                            children: "Know more"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, idx)
                )
            })
        })
    });
};
/* harmony default export */ const Services2 = (Services);


/***/ }),

/***/ 6163:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/main/skills.json
const skills_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/Main/Skills/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Skills = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "section-padding",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "content md-mb50",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "sub-head radius fz-12 ls2 text-u mb-10",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        children: "Highly expertise"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("h2", {
                                    className: "mb-20 fw-800",
                                    children: [
                                        "162 Already ",
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "gr-purple-red-text",
                                            children: "completed works and still counting"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "We guide you through every step, from company establishment to ongoing consulting and auditing, ensuring seamless operations."
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "clients-rate-img flex mt-40",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "imgs valign",
                                            children: skills.feedback.users.map((userImg, idx)=>/*#__PURE__*/ _jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ _jsx("img", {
                                                        src: userImg,
                                                        alt: ""
                                                    })
                                                }, idx)
                                            )
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ _jsxs("h6", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                skills.feedback.percentage,
                                                                "%"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "rate-star fz-10 ms-1",
                                                            children: Array(skills.feedback.stars).fill().map((_, idx)=>/*#__PURE__*/ _jsx("i", {
                                                                    className: "fas fa-star"
                                                                }, idx)
                                                            )
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "fz-13",
                                                    children: "Positive Feedback"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "content",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "crv-status text-center",
                                children: skills.numbers.map((number, idx)=>/*#__PURE__*/ _jsx("div", {
                                        className: `st-${number.class} item valign`,
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "cont full-width",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    children: number.value
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    children: number.title
                                                })
                                            ]
                                        })
                                    }, idx)
                                )
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Main_Skills = ((/* unused pure expression or super */ null && (Skills)));


/***/ }),

/***/ 3375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _data_main_testimonials2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 

const Testimonials = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "testim-box-shape bg-img",
                style: {
                    backgroundImage: "url('img/testimonials/bg.jpg')"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-7 offset-lg-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testim-crve",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                                    id: "content-carousel-container-unq-4",
                                    className: "swiper-container",
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    speed: 1000,
                                    loop: true,
                                    children: _data_main_testimonials2_json__WEBPACK_IMPORTED_MODULE_2__.map((testimonial, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "qoute-icon",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-quote-left"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "fw-400 text-i",
                                                            children: testimonial.comment
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cont mt-30",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "img-flex",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: testimonial.author.avatar,
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "fw-700",
                                                                        children: testimonial.author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: testimonial.author.position
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, idx)
                                    )
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "back-shape bg-img",
                        style: {
                            backgroundImage: "url('img/testimonials/testim-shape2.png')"
                        }
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 2256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3693);
/* harmony import */ var _components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1874);
/* harmony import */ var _components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9408);
/* harmony import */ var _components_Main_Header2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8181);
/* harmony import */ var _components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87);
/* harmony import */ var _components_Main_Services2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8506);
/* harmony import */ var _components_Main_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2381);
/* harmony import */ var _components_Main_Process2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9453);
/* harmony import */ var _components_Main_Portfolio2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5871);
/* harmony import */ var _components_Main_Skills__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6163);
/* harmony import */ var _components_Main_Testimonials2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3375);
/* harmony import */ var _components_Main_Blog2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2433);
/* harmony import */ var _components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9008);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__, _components_Main_Testimonials2__WEBPACK_IMPORTED_MODULE_13__]);
([_components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__, _components_Main_Testimonials2__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-css-tags */ 

//= Layout

//= Components












const CleanStarEnergy = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add("land-demo2");
        const removeClasses = [
            "index-bus1",
            "index-corporate",
            "index-restaurant",
            "index-arch",
            "index-freelancer",
            "cr-agency",
            "index-main",
            "mobile-app",
            "gr-orange-bg",
            "nft-market"
        ];
        document.body.classList.remove(...removeClasses);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Clean Star Energy LLC"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://www.cleanstarenergyusa.com"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                defaultLogoTheme: "dark",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Header2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Services2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_About__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Process2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Testimonials2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        footerClass: "pb-40",
                        type: "purple-red"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CleanStarEnergy);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8394:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"img/brands/01-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/02-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/03-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/04-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/05-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/06-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/07-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/08-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/09-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/10-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/11-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/12-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/13-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/14-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/15-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/16-brands.svg","title":"www.cleanstarenergyusa.com"},{"image":"img/brands/17-brands.svg","title":"www.cleanstarenergyusa.com"}]');

/***/ }),

/***/ 5152:
/***/ ((module) => {

module.exports = JSON.parse('[{"comment":"I just love their work, very adaptive and they know what they can do for a project before taking it.","author":{"name":"Pat Hendrik","avatar":"img/testimonials/1.jpg","position":"Clean Star Energy llc Customer"}}]');

/***/ })

};
;