import React from 'react';
import { VectorMap } from 'react-jvectormap'

class Flags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 'unknown',
            countryCode: '',
            countryName: '',
            countryImage: '',
            selectedMap: 'europe_mill',
            codes: [{
                name: "Afghanistan",
                iso2: "AF",
                countrycode: "004",
                image: require("./flags/af.png"),
                maps: ["world_mill"]
            }, {
                name: "Åland Islands",
                iso2: "AX",
                countrycode: "248",
                image: require("./flags/ax.png"),
                maps: ["europe_mill"]
            }, {
                name: "Albania",
                iso2: "AL",
                countrycode: "008",
                image: require("./flags/al.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Algeria",
                iso2: "DZ",
                countrycode: "012",
                image: require("./flags/dz.png"),
                maps: ["world_mill"]
            }, /*{
                name: "American Samoa",
                iso2: "AS",
                countrycode: "016",
                image: require("./flags/as.png"),
				maps:[]
            },*/ {
                name: "Andorra",
                iso2: "AD",
                countrycode: "020",
                image: require("./flags/ad.png"),
                maps: ["europe_mill"]
            }, {
                name: "Angola",
                iso2: "AO",
                countrycode: "024",
                image: require("./flags/ao.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Anguilla",
                iso2: "AI",
                countrycode: "660",
                image: require("./flags/ai.png"),
				maps:[]
            }, {
                name: "Antarctica",
                iso2: "AQ",
                countrycode: "010",
                image: require("./flags/aq.png"),
				maps:[]
            },*/ {
                name: "Antigua and Barbuda",
                iso2: "AG",
                countrycode: "028",
                image: require("./flags/ag.png"),
                maps: []
            }, {
                name: "Argentina",
                iso2: "AR",
                countrycode: "032",
                image: require("./flags/ar.png"),
                maps: ["world_mill"]
            }, {
                name: "Armenia",
                iso2: "AM",
                countrycode: "051",
                image: require("./flags/am.png"),
                maps: ["world_mill"]
            },/* {
                name: "Aruba",
                iso2: "AW",
                countrycode: "533",
                image: require("./flags/aw.png"),
				maps:[]
            },*/ {
                name: "Australia",
                iso2: "AU",
                countrycode: "036",
                image: require("./flags/au.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "Austria",
                iso2: "AT",
                countrycode: "040",
                image: require("./flags/at.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Azerbaijan",
                iso2: "AZ",
                countrycode: "031",
                image: require("./flags/az.png"),
                maps: ["world_mill"]
            }, {
                name: "Bahamas",
                iso2: "BS",
                countrycode: "044",
                image: require("./flags/bs.png"),
                maps: ["world_mill"]
            }, {
                name: "Bahrain",
                iso2: "BH",
                countrycode: "048",
                image: require("./flags/bh.png"),
                maps: []
            }, {
                name: "Bangladesh",
                iso2: "BD",
                countrycode: "050",
                image: require("./flags/bd.png"),
                maps: ["world_mill"]
            }, {
                name: "Barbados",
                iso2: "BB",
                countrycode: "052",
                image: require("./flags/bb.png"),
                maps: []
            }, {
                name: "Belarus",
                iso2: "BY",
                countrycode: "112",
                image: require("./flags/by.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Belgium",
                iso2: "BE",
                countrycode: "056",
                image: require("./flags/be.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Belize",
                iso2: "BZ",
                countrycode: "084",
                image: require("./flags/bz.png"),
                maps: ["world_mill"]
            }, {
                name: "Benin",
                iso2: "BJ",
                countrycode: "204",
                image: require("./flags/bj.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Bermuda",
                iso2: "BM",
                countrycode: "060",
                image: require("./flags/bm.png"),
				maps:[]
            }, */{
                name: "Bhutan",
                iso2: "BT",
                countrycode: "064",
                image: require("./flags/bt.png"),
                maps: ["world_mill"]
            }, {
                name: "Bolivia (Plurinational State of)",
                iso2: "BO",
                countrycode: "068",
                image: require("./flags/bo.png"),
                maps: ["world_mill"]
            },/* {
                name: "Bonaire, Sint Eustatius and Saba",
                iso2: "BQ",
                countrycode: "535",
                image: require("./flags/bq.png"),
				maps:[]
            },*/ {
                name: "Bosnia and Herzegovina",
                iso2: "BA",
                countrycode: "070",
                image: require("./flags/ba.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Botswana",
                iso2: "BW",
                countrycode: "072",
                image: require("./flags/bw.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Bouvet Island",
                iso2: "BV",
                countrycode: "074",
                image: require("./flags/bv.png"),
				maps:[]
            },*/ {
                name: "Brazil",
                iso2: "BR",
                countrycode: "076",
                image: require("./flags/br.png"),
                maps: ["world_mill"]
            }, {
                name: "British Indian Ocean Territory",
                iso2: "IO",
                countrycode: "086",
                image: require("./flags/io.png"),
                maps: []
            }, {
                name: "Brunei Darussalam",
                iso2: "BN",
                countrycode: "096",
                image: require("./flags/bn.png"),
                maps: ["world_mill"]
            }, {
                name: "Bulgaria",
                iso2: "BG",
                countrycode: "100",
                image: require("./flags/bg.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Burkina Faso",
                iso2: "BF",
                countrycode: "854",
                image: require("./flags/bf.png"),
                maps: ["world_mill"]
            }, {
                name: "Burundi",
                iso2: "BI",
                countrycode: "108",
                image: require("./flags/bi.png"),
                maps: ["world_mill"]
            }, {
                name: "Cabo Verde",
                iso2: "CV",
                countrycode: "132",
                image: require("./flags/cv.png"),
                maps: []
            }, {
                name: "Cambodia",
                iso2: "KH",
                countrycode: "116",
                image: require("./flags/kh.png"),
                maps: ["world_mill"]
            }, {
                name: "Cameroon",
                iso2: "CM",
                countrycode: "120",
                image: require("./flags/cm.png"),
                maps: ["world_mill"]
            }, {
                name: "Canada",
                iso2: "CA",
                countrycode: "124",
                image: require("./flags/ca.png"),
                maps: ["world_mill"]
            }, {
                name: "Cayman Islands",
                iso2: "KY",
                countrycode: "136",
                image: require("./flags/ky.png"),
                maps: []
            }, {
                name: "Central African Republic",
                iso2: "CF",
                countrycode: "140",
                image: require("./flags/cf.png"),
                maps: ["world_mill"]
            }, {
                name: "Chad",
                iso2: "TD",
                countrycode: "148",
                image: require("./flags/td.png"),
                maps: ["world_mill"]
            }, {
                name: "Chile",
                iso2: "CL",
                countrycode: "152",
                image: require("./flags/cl.png"),
                maps: ["world_mill"]
            }, {
                name: "China",
                iso2: "CN",
                countrycode: "156",
                image: require("./flags/cn.png"),
                maps: ["world_mill"]
            }, {
                name: "Christmas Island",
                iso2: "CX",
                countrycode: "162",
                image: require("./flags/cx.png"),
                maps: []
            }, /*{
                name: "Cocos (Keeling) Islands",
                iso2: "CC",
                countrycode: "166",
                image: require("./flags/cc.png"),
				maps:[]
            }, */{
                name: "Colombia",
                iso2: "CO",
                countrycode: "170",
                image: require("./flags/co.png"),
                maps: ["world_mill"]
            }, {
                name: "Comoros",
                iso2: "KM",
                countrycode: "174",
                image: require("./flags/km.png"),
                maps: []
            }, {
                name: "Congo",
                iso2: "CG",
                countrycode: "178",
                image: require("./flags/cg.png"),
                maps: ["world_mill"]
            }, {
                name: "Congo, Democratic Republic of the",
                iso2: "CD",
                countrycode: "180",
                image: require("./flags/cd.png"),
                maps: ["world_mill"]
            }, {
                name: "Cook Islands",
                iso2: "CK",
                countrycode: "184",
                image: require("./flags/ck.png"),
                maps: []
            }, {
                name: "Costa Rica",
                iso2: "CR",
                countrycode: "188",
                image: require("./flags/cr.png"),
                maps: ["world_mill"]
            }, {
                name: "Côte d'Ivoire",
                iso2: "CI",
                countrycode: "384",
                image: require("./flags/ci.png"),
                maps: ["world_mill"]
            }, {
                name: "Croatia",
                iso2: "HR",
                countrycode: "191",
                image: require("./flags/hr.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Cuba",
                iso2: "CU",
                countrycode: "192",
                image: require("./flags/cu.png"),
                maps: ["world_mill"]
            }, {
                name: "Curaçao",
                iso2: "CW",
                countrycode: "531",
                image: require("./flags/cw.png"),
                maps: []
            }, {
                name: "Cyprus",
                iso2: "CY",
                countrycode: "196",
                image: require("./flags/cy.png"),
                maps: ["world_mill"]
            }, {
                name: "Czechia",
                iso2: "CZ",
                countrycode: "203",
                image: require("./flags/cz.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Denmark",
                iso2: "DK",
                countrycode: "208",
                image: require("./flags/dk.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Djibouti",
                iso2: "DJ",
                countrycode: "262",
                image: require("./flags/dj.png"),
                maps: ["world_mill"]
            }, {
                name: "Dominica",
                iso2: "DM",
                countrycode: "212",
                image: require("./flags/dm.png"),
                maps: []
            }, {
                name: "Dominican Republic",
                iso2: "DO",
                countrycode: "214",
                image: require("./flags/do.png"),
                maps: ["world_mill"]
            }, {
                name: "Ecuador",
                iso2: "EC",
                countrycode: "218",
                image: require("./flags/ec.png"),
                maps: ["world_mill"]
            }, {
                name: "Egypt",
                iso2: "EG",
                countrycode: "818",
                image: require("./flags/eg.png"),
                maps: ["world_mill"]
            }, {
                name: "El Salvador",
                iso2: "SV",
                countrycode: "222",
                image: require("./flags/sv.png"),
                maps: ["world_mill"]
            }, {
                name: "Equatorial Guinea",
                iso2: "GQ",
                countrycode: "226",
                image: require("./flags/gq.png"),
                maps: ["world_mill"]
            }, {
                name: "Eritrea",
                iso2: "ER",
                countrycode: "232",
                image: require("./flags/er.png"),
                maps: ["world_mill"]
            }, {
                name: "Estonia",
                iso2: "EE",
                countrycode: "233",
                image: require("./flags/ee.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Eswatini / Swaziland",
                iso2: "SZ",
                countrycode: "748",
                image: require("./flags/sz.png"),
                maps: ["world_mill"]
            }, {
                name: "Ethiopia",
                iso2: "ET",
                countrycode: "231",
                image: require("./flags/et.png"),
                maps: ["world_mill"]
            }, {
                name: "Falkland Islands (Malvinas)",
                iso2: "FK",
                countrycode: "238",
                image: require("./flags/fk.png"),
                maps: ["world_mill"]
            }, {
                name: "Faroe Islands",
                iso2: "FO",
                countrycode: "234",
                image: require("./flags/fo.png"),
                maps: ["europe_mill"]
            }, {
                name: "Fiji",
                iso2: "FJ",
                countrycode: "242",
                image: require("./flags/fj.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "Finland",
                iso2: "FI",
                countrycode: "246",
                image: require("./flags/fi.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "France",
                iso2: "FR",
                countrycode: "250",
                image: require("./flags/fr.png"),
                maps: ["world_mill", "europe_mill"]
            }, /*{
                name: "French Guiana",
                iso2: "GF",
                countrycode: "254",
                image: require("./flags/gf.png"),
				maps:[]
            },*/ {
                name: "French Polynesia",
                iso2: "PF",
                countrycode: "258",
                image: require("./flags/pf.png"),
                maps: ["oceania_mill"]
            }, {
                name: "French Southern Territories",
                iso2: "TF",
                countrycode: "260",
                image: require("./flags/tf.png"),
                maps: ["world_mill"]
            }, {
                name: "Gabon",
                iso2: "GA",
                countrycode: "266",
                image: require("./flags/ga.png"),
                maps: ["world_mill"]
            }, {
                name: "Gambia",
                iso2: "GM",
                countrycode: "270",
                image: require("./flags/gm.png"),
                maps: ["world_mill"]
            }, {
                name: "Georgia",
                iso2: "GE",
                countrycode: "268",
                image: require("./flags/ge.png"),
                maps: ["world_mill"]
            }, {
                name: "Germany",
                iso2: "DE",
                countrycode: "276",
                image: require("./flags/de.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Ghana",
                iso2: "GH",
                countrycode: "288",
                image: require("./flags/gh.png"),
                maps: ["world_mill"]
            }, {
                name: "Gibraltar",
                iso2: "GI",
                countrycode: "292",
                image: require("./flags/gi.png"),
                maps: []
            }, {
                name: "Greece",
                iso2: "GR",
                countrycode: "300",
                image: require("./flags/gr.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Greenland",
                iso2: "GL",
                countrycode: "304",
                image: require("./flags/gl.png"),
                maps: ["world_mill"]
            }, {
                name: "Grenada",
                iso2: "GD",
                countrycode: "308",
                image: require("./flags/gd.png"),
                maps: []
            }, /*{
                name: "Guadeloupe",
                iso2: "GP",
                countrycode: "312",
                image: require("./flags/gp.png"),
				maps:[]
            },*/ {
                name: "Guam",
                iso2: "GU",
                countrycode: "316",
                image: require("./flags/gu.png"),
                maps: ["oceania_mill"]
            }, {
                name: "Guatemala",
                iso2: "GT",
                countrycode: "320",
                image: require("./flags/gt.png"),
                maps: ["world_mill"]
            }, {
                name: "Guernsey",
                iso2: "GG",
                countrycode: "831",
                image: require("./flags/gg.png"),
                maps: ["europe_mill"]
            }, {
                name: "Guinea",
                iso2: "GN",
                countrycode: "324",
                image: require("./flags/gn.png"),
                maps: ["world_mill"]
            }, {
                name: "Guinea-Bissau",
                iso2: "GW",
                countrycode: "624",
                image: require("./flags/gw.png"),
                maps: ["world_mill"]
            }, {
                name: "Guyana",
                iso2: "GY",
                countrycode: "328",
                image: require("./flags/gy.png"),
                maps: ["world_mill"]
            }, {
                name: "Haiti",
                iso2: "HT",
                countrycode: "332",
                image: require("./flags/ht.png"),
                maps: ["world_mill"]
            },/* {
                name: "Heard Island and McDonald Islands",
                iso2: "HM",
                countrycode: "334",
                image: require("./flags/hm.png"),
				maps:[]
            },*/ {
                name: "Holy See",
                iso2: "VA",
                countrycode: "336",
                image: require("./flags/va.png"),
                maps: []
            }, {
                name: "Honduras",
                iso2: "HN",
                countrycode: "340",
                image: require("./flags/hn.png"),
                maps: ["world_mill"]
            }, {
                name: "Hong Kong",
                iso2: "HK",
                countrycode: "344",
                image: require("./flags/hk.png"),
                maps: []
            }, {
                name: "Hungary",
                iso2: "HU",
                countrycode: "348",
                image: require("./flags/hu.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Iceland",
                iso2: "IS",
                countrycode: "352",
                image: require("./flags/is.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "India",
                iso2: "IN",
                countrycode: "356",
                image: require("./flags/in.png"),
                maps: ["world_mill"]
            }, {
                name: "Indonesia",
                iso2: "ID",
                countrycode: "360",
                image: require("./flags/id.png"),
                maps: ["world_mill"]
            }, {
                name: "Iran (Islamic Republic of)",
                iso2: "IR",
                countrycode: "364",
                image: require("./flags/ir.png"),
                maps: ["world_mill"]
            }, {
                name: "Iraq",
                iso2: "IQ",
                countrycode: "368",
                image: require("./flags/iq.png"),
                maps: ["world_mill"]
            }, {
                name: "Ireland",
                iso2: "IE",
                countrycode: "372",
                image: require("./flags/ie.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Isle of Man",
                iso2: "IM",
                countrycode: "833",
                image: require("./flags/im.png"),
                maps: ["europe_mill"]
            }, {
                name: "Israel",
                iso2: "IL",
                countrycode: "376",
                image: require("./flags/il.png"),
                maps: ["world_mill"]
            }, {
                name: "Italy",
                iso2: "IT",
                countrycode: "380",
                image: require("./flags/it.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Jamaica",
                iso2: "JM",
                countrycode: "388",
                image: require("./flags/jm.png"),
                maps: ["world_mill"]
            }, {
                name: "Japan",
                iso2: "JP",
                countrycode: "392",
                image: require("./flags/jp.png"),
                maps: ["world_mill"]
            }, {
                name: "Jersey",
                iso2: "JE",
                countrycode: "832",
                image: require("./flags/je.png"),
                maps: ["europe_mill"]
            }, {
                name: "Jordan",
                iso2: "JO",
                countrycode: "400",
                image: require("./flags/jo.png"),
                maps: ["world_mill"]
            }, {
                name: "Kazakhstan",
                iso2: "KZ",
                countrycode: "398",
                image: require("./flags/kz.png"),
                maps: ["world_mill"]
            }, {
                name: "Kenya",
                iso2: "KE",
                countrycode: "404",
                image: require("./flags/ke.png"),
                maps: ["world_mill"]
            }, {
                name: "Kiribati",
                iso2: "KI",
                countrycode: "296",
                image: require("./flags/ki.png"),
                maps: ["oceania_mill"]
            }, {
                name: "Korea (Democratic People's Republic of)",
                iso2: "KP",
                countrycode: "408",
                image: require("./flags/kp.png"),
                maps: ["world_mill"]
            }, {
                name: "Korea, Republic of",
                iso2: "KR",
                countrycode: "410",
                image: require("./flags/kr.png"),
                maps: ["world_mill"]
            }, {
                name: "Kuwait",
                iso2: "KW",
                countrycode: "414",
                image: require("./flags/kw.png"),
                maps: ["world_mill"]
            }, {
                name: "Kyrgyzstan",
                iso2: "KG",
                countrycode: "417",
                image: require("./flags/kg.png"),
                maps: ["world_mill"]
            }, {
                name: "Lao People's Democratic Republic",
                iso2: "LA",
                countrycode: "418",
                image: require("./flags/la.png"),
                maps: ["world_mill"]
            }, {
                name: "Latvia",
                iso2: "LV",
                countrycode: "428",
                image: require("./flags/lv.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Lebanon",
                iso2: "LB",
                countrycode: "422",
                image: require("./flags/lb.png"),
                maps: ["world_mill"]
            }, {
                name: "Lesotho",
                iso2: "LS",
                countrycode: "426",
                image: require("./flags/ls.png"),
                maps: ["world_mill"]
            }, {
                name: "Liberia",
                iso2: "LR",
                countrycode: "430",
                image: require("./flags/lr.png"),
                maps: ["world_mill"]
            }, {
                name: "Libya",
                iso2: "LY",
                countrycode: "434",
                image: require("./flags/ly.png"),
                maps: ["world_mill"]
            }, {
                name: "Liechtenstein",
                iso2: "LI",
                countrycode: "438",
                image: require("./flags/li.png"),
                maps: ["europe_mill"]
            }, {
                name: "Lithuania",
                iso2: "LT",
                countrycode: "440",
                image: require("./flags/lt.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Luxembourg",
                iso2: "LU",
                countrycode: "442",
                image: require("./flags/lu.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Macao",
                iso2: "MO",
                countrycode: "446",
                image: require("./flags/mo.png"),
                maps: []
            }, {
                name: "Madagascar",
                iso2: "MG",
                countrycode: "450",
                image: require("./flags/mg.png"),
                maps: ["world_mill"]
            }, {
                name: "Malawi",
                iso2: "MW",
                countrycode: "454",
                image: require("./flags/mw.png"),
                maps: ["world_mill"]
            }, {
                name: "Malaysia",
                iso2: "MY",
                countrycode: "458",
                image: require("./flags/my.png"),
                maps: ["world_mill"]
            }, {
                name: "Maldives",
                iso2: "MV",
                countrycode: "462",
                image: require("./flags/mv.png"),
                maps: []
            }, {
                name: "Mali",
                iso2: "ML",
                countrycode: "466",
                image: require("./flags/ml.png"),
                maps: ["world_mill"]
            }, {
                name: "Malta",
                iso2: "MT",
                countrycode: "470",
                image: require("./flags/mt.png"),
                maps: ["europe_mill"]
            }, {
                name: "Marshall Islands",
                iso2: "MH",
                countrycode: "584",
                image: require("./flags/mh.png"),
                maps: []
            }, {
                name: "Martinique",
                iso2: "MQ",
                countrycode: "474",
                image: require("./flags/mq.png"),
                maps: []
            }, {
                name: "Mauritania",
                iso2: "MR",
                countrycode: "478",
                image: require("./flags/mr.png"),
                maps: ["world_mill"]
            }, {
                name: "Mauritius",
                iso2: "MU",
                countrycode: "480",
                image: require("./flags/mu.png"),
                maps: []
            },/* {
                name: "Mayotte",
                iso2: "YT",
                countrycode: "175",
                image: require("./flags/yt.png"),
				maps:[]
            },*/ {
                name: "Mexico",
                iso2: "MX",
                countrycode: "484",
                image: require("./flags/mx.png"),
                maps: ["world_mill"]
            }, {
                name: "Micronesia (Federated States of)",
                iso2: "FM",
                countrycode: "583",
                image: require("./flags/fm.png"),
                maps: ["oceania_mill"]
            }, {
                name: "Moldova, Republic of",
                iso2: "MD",
                countrycode: "498",
                image: require("./flags/md.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Monaco",
                iso2: "MC",
                countrycode: "492",
                image: require("./flags/mc.png"),
                maps: []
            }, {
                name: "Mongolia",
                iso2: "MN",
                countrycode: "496",
                image: require("./flags/mn.png"),
                maps: ["world_mill"]
            }, {
                name: "Montenegro",
                iso2: "ME",
                countrycode: "499",
                image: require("./flags/me.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Montserrat",
                iso2: "MS",
                countrycode: "500",
                image: require("./flags/ms.png"),
                maps: []
            }, {
                name: "Morocco",
                iso2: "MA",
                countrycode: "504",
                image: require("./flags/ma.png"),
                maps: ["world_mill"]
            }, {
                name: "Mozambique",
                iso2: "MZ",
                countrycode: "508",
                image: require("./flags/mz.png"),
                maps: ["world_mill"]
            }, {
                name: "Myanmar",
                iso2: "MM",
                countrycode: "104",
                image: require("./flags/mm.png"),
                maps: ["world_mill"]
            }, {
                name: "Namibia",
                iso2: "NA",
                countrycode: "516",
                image: require("./flags/na.png"),
                maps: ["world_mill"]
            }, {
                name: "Nauru",
                iso2: "NR",
                countrycode: "520",
                image: require("./flags/nr.png"),
                maps: []
            }, {
                name: "Nepal",
                iso2: "NP",
                countrycode: "524",
                image: require("./flags/np.png"),
                maps: ["world_mill"]
            }, {
                name: "Netherlands",
                iso2: "NL",
                countrycode: "528",
                image: require("./flags/nl.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "New Caledonia",
                iso2: "NC",
                countrycode: "540",
                image: require("./flags/nc.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "New Zealand",
                iso2: "NZ",
                countrycode: "554",
                image: require("./flags/nz.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "Nicaragua",
                iso2: "NI",
                countrycode: "558",
                image: require("./flags/ni.png"),
                maps: ["world_mill"]
            }, {
                name: "Niger",
                iso2: "NE",
                countrycode: "562",
                image: require("./flags/ne.png"),
                maps: ["world_mill"]
            }, {
                name: "Nigeria",
                iso2: "NG",
                countrycode: "566",
                image: require("./flags/ng.png"),
                maps: ["world_mill"]
            }, {
                name: "Niue",
                iso2: "NU",
                countrycode: "570",
                image: require("./flags/nu.png"),
                maps: ["oceania_mill"]
            }, {
                name: "Norfolk Island",
                iso2: "NF",
                countrycode: "574",
                image: require("./flags/nf.png"),
                maps: []
            }, {
                name: "North Macedonia",
                iso2: "MK",
                countrycode: "807",
                image: require("./flags/mk.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Northern Mariana Islands",
                iso2: "MP",
                countrycode: "580",
                image: require("./flags/mp.png"),
                maps: []
            }, {
                name: "Norway",
                iso2: "NO",
                countrycode: "578",
                image: require("./flags/no.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Oman",
                iso2: "OM",
                countrycode: "512",
                image: require("./flags/om.png"),
                maps: ["world_mill"]
            }, {
                name: "Pakistan",
                iso2: "PK",
                countrycode: "586",
                image: require("./flags/pk.png"),
                maps: ["world_mill"]
            }, {
                name: "Palau",
                iso2: "PW",
                countrycode: "585",
                image: require("./flags/pw.png"),
                maps: ["oceania_mill"]
            }, {
                name: "Palestine, State of",
                iso2: "PS",
                countrycode: "275",
                image: require("./flags/ps.png"),
                maps: ["world_mill"]
            }, {
                name: "Panama",
                iso2: "PA",
                countrycode: "591",
                image: require("./flags/pa.png"),
                maps: ["world_mill"]
            }, {
                name: "Papua New Guinea",
                iso2: "PG",
                countrycode: "598",
                image: require("./flags/pg.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "Paraguay",
                iso2: "PY",
                countrycode: "600",
                image: require("./flags/py.png"),
                maps: ["world_mill"]
            }, {
                name: "Peru",
                iso2: "PE",
                countrycode: "604",
                image: require("./flags/pe.png"),
                maps: ["world_mill"]
            }, {
                name: "Philippines",
                iso2: "PH",
                countrycode: "608",
                image: require("./flags/ph.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Pitcairn",
                iso2: "PN",
                countrycode: "612",
                image: require("./flags/pn.png"),
				maps:[]
            },*/ {
                name: "Poland",
                iso2: "PL",
                countrycode: "616",
                image: require("./flags/pl.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Portugal",
                iso2: "PT",
                countrycode: "620",
                image: require("./flags/pt.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Puerto Rico",
                iso2: "PR",
                countrycode: "630",
                image: require("./flags/pr.png"),
                maps: ["world_mill"]
            }, {
                name: "Qatar",
                iso2: "QA",
                countrycode: "634",
                image: require("./flags/qa.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Réunion",
                iso2: "RE",
                countrycode: "638",
                image: require("./flags/re.png"),
				maps:[]
            },*/ {
                name: "Romania",
                iso2: "RO",
                countrycode: "642",
                image: require("./flags/ro.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Russian Federation",
                iso2: "RU",
                countrycode: "643",
                image: require("./flags/ru.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Rwanda",
                iso2: "RW",
                countrycode: "646",
                image: require("./flags/rw.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Saint Barthélemy",
                iso2: "BL",
                countrycode: "652",
                image: require("./flags/bl.png"),
				maps:[]
            },*//* {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                iso2: "SH",
                countrycode: "654",
                image: require("./flags/sh.png"),
				maps:[]
            },*/ {
                name: "Saint Kitts and Nevis",
                iso2: "KN",
                countrycode: "659",
                image: require("./flags/kn.png"),
                maps: []
            }, {
                name: "Saint Lucia",
                iso2: "LC",
                countrycode: "662",
                image: require("./flags/lc.png"),
                maps: []
            }, /*{
                name: "Saint Martin (French part)",
                iso2: "MF",
                countrycode: "663",
                image: require("./flags/mf.png"),
				maps:[]
            },*//* {
                name: "Saint Pierre and Miquelon",
                iso2: "PM",
                countrycode: "666",
                image: require("./flags/pm.png"),
				maps:[]
            }, */{
                name: "Saint Vincent and the Grenadines",
                iso2: "VC",
                countrycode: "670",
                image: require("./flags/vc.png"),
                maps: []
            }, {
                name: "Samoa",
                iso2: "WS",
                countrycode: "882",
                image: require("./flags/ws.png"),
                maps: ["oceania_mill"]
            }, {
                name: "San Marino",
                iso2: "SM",
                countrycode: "674",
                image: require("./flags/sm.png"),
                maps: ["europe_mill"]
            }, {
                name: "Sao Tome and Principe",
                iso2: "ST",
                countrycode: "678",
                image: require("./flags/st.png"),
                maps: []
            }, {
                name: "Saudi Arabia",
                iso2: "SA",
                countrycode: "682",
                image: require("./flags/sa.png"),
                maps: ["world_mill"]
            }, {
                name: "Senegal",
                iso2: "SN",
                countrycode: "686",
                image: require("./flags/sn.png"),
                maps: ["world_mill"]
            }, {
                name: "Serbia",
                iso2: "RS",
                countrycode: "688",
                image: require("./flags/rs.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Seychelles",
                iso2: "SC",
                countrycode: "690",
                image: require("./flags/sc.png"),
                maps: []
            }, {
                name: "Sierra Leone",
                iso2: "SL",
                countrycode: "694",
                image: require("./flags/sl.png"),
                maps: ["world_mill"]
            }, {
                name: "Singapore",
                iso2: "SG",
                countrycode: "702",
                image: require("./flags/sg.png"),
                maps: []
            }, {
                name: "Sint Maarten (Dutch part)",
                iso2: "SX",
                countrycode: "534",
                image: require("./flags/sx.png"),
                maps: []
            }, {
                name: "Slovakia",
                iso2: "SK",
                countrycode: "703",
                image: require("./flags/sk.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Slovenia",
                iso2: "SI",
                countrycode: "705",
                image: require("./flags/si.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Solomon Islands",
                iso2: "SB",
                countrycode: "090",
                image: require("./flags/sb.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "Somalia",
                iso2: "SO",
                countrycode: "706",
                image: require("./flags/so.png"),
                maps: ["world_mill"]
            }, {
                name: "South Africa",
                iso2: "ZA",
                countrycode: "710",
                image: require("./flags/za.png"),
                maps: ["world_mill"]
            }, {
                name: "South Georgia and the South Sandwich Islands",
                iso2: "GS",
                countrycode: "239",
                image: require("./flags/gs.png"),
                maps: []
            }, {
                name: "South Sudan",
                iso2: "SS",
                countrycode: "728",
                image: require("./flags/ss.png"),
                maps: ["world_mill"]
            }, {
                name: "Spain",
                iso2: "ES",
                countrycode: "724",
                image: require("./flags/es.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Sri Lanka",
                iso2: "LK",
                countrycode: "144",
                image: require("./flags/lk.png"),
                maps: ["world_mill"]
            }, {
                name: "Sudan",
                iso2: "SD",
                countrycode: "729",
                image: require("./flags/sd.png"),
                maps: ["world_mill"]
            }, {
                name: "Suriname",
                iso2: "SR",
                countrycode: "740",
                image: require("./flags/sr.png"),
                maps: ["world_mill"]
            }, /*{
                name: "Svalbard and Jan Mayen",
                iso2: "SJ",
                countrycode: "744",
                image: require("./flags/sj.png"),
				maps:[]
            },*/ {
                name: "Sweden",
                iso2: "SE",
                countrycode: "752",
                image: require("./flags/se.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Switzerland",
                iso2: "CH",
                countrycode: "756",
                image: require("./flags/ch.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Syrian Arab Republic",
                iso2: "SY",
                countrycode: "760",
                image: require("./flags/sy.png"),
                maps: ["world_mill"]
            }, {
                name: "Taiwan, Province of China",
                iso2: "TW",
                countrycode: "158",
                image: require("./flags/tw.png"),
                maps: ["world_mill"]
            }, {
                name: "Tajikistan",
                iso2: "TJ",
                countrycode: "762",
                image: require("./flags/tj.png"),
                maps: ["world_mill"]
            }, {
                name: "Tanzania, United Republic of",
                iso2: "TZ",
                countrycode: "834",
                image: require("./flags/tz.png"),
                maps: ["world_mill"]
            }, {
                name: "Thailand",
                iso2: "TH",
                countrycode: "764",
                image: require("./flags/th.png"),
                maps: ["world_mill"]
            }, {
                name: "Timor-Leste",
                iso2: "TL",
                countrycode: "626",
                image: require("./flags/tl.png"),
                maps: ["world_mill"]
            }, {
                name: "Togo",
                iso2: "TG",
                countrycode: "768",
                image: require("./flags/tg.png"),
                maps: ["world_mill"]
            }, {
                name: "Tokelau",
                iso2: "TK",
                countrycode: "772",
                image: require("./flags/tk.png"),
                maps: []
            }, {
                name: "Tonga",
                iso2: "TO",
                countrycode: "776",
                image: require("./flags/to.png"),
                maps: []
            }, {
                name: "Trinidad and Tobago",
                iso2: "TT",
                countrycode: "780",
                image: require("./flags/tt.png"),
                maps: ["world_mill"]
            }, {
                name: "Tunisia",
                iso2: "TN",
                countrycode: "788",
                image: require("./flags/tn.png"),
                maps: ["world_mill"]
            }, {
                name: "Turkey",
                iso2: "TR",
                countrycode: "792",
                image: require("./flags/tr.png"),
                maps: ["world_mill"]
            }, {
                name: "Turkmenistan",
                iso2: "TM",
                countrycode: "795",
                image: require("./flags/tm.png"),
                maps: ["world_mill"]
            }, {
                name: "Turks and Caicos Islands",
                iso2: "TC",
                countrycode: "796",
                image: require("./flags/tc.png"),
                maps: []
            }, {
                name: "Tuvalu",
                iso2: "TV",
                countrycode: "798",
                image: require("./flags/tv.png"),
                maps: []
            }, {
                name: "Uganda",
                iso2: "UG",
                countrycode: "800",
                image: require("./flags/ug.png"),
                maps: ["world_mill"]
            }, {
                name: "Ukraine",
                iso2: "UA",
                countrycode: "804",
                image: require("./flags/ua.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "United Arab Emirates",
                iso2: "AE",
                countrycode: "784",
                image: require("./flags/ae.png"),
                maps: ["world_mill"]
            }, {
                name: "United Kingdom of Great Britain and Northern Ireland",
                iso2: "GB",
                countrycode: "826",
                image: require("./flags/gb.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "United States of America",
                iso2: "US",
                countrycode: "840",
                image: require("./flags/us.png"),
                maps: ["world_mill"]
            }, /*{
                name: "United States Minor Outlying Islands",
                iso2: "UM",
                countrycode: "581",
                image: require("./flags/um.png"),
				maps:[]
            }, */{
                name: "Uruguay",
                iso2: "UY",
                countrycode: "858",
                image: require("./flags/uy.png"),
                maps: ["world_mill"]
            }, {
                name: "Uzbekistan",
                iso2: "UZ",
                countrycode: "860",
                image: require("./flags/uz.png"),
                maps: ["world_mill"]
            }, {
                name: "Vanuatu",
                iso2: "VU",
                countrycode: "548",
                image: require("./flags/vu.png"),
                maps: ["world_mill", "oceania_mill"]
            }, {
                name: "Venezuela (Bolivarian Republic of)",
                iso2: "VE",
                countrycode: "862",
                image: require("./flags/ve.png"),
                maps: ["world_mill"]
            }, {
                name: "Viet Nam",
                iso2: "VN",
                countrycode: "704",
                image: require("./flags/vn.png"),
                maps: ["world_mill"]
            }, {
                name: "Virgin Islands (British)",
                iso2: "VG",
                countrycode: "092",
                image: require("./flags/vg.png"),
                maps: []
            }, {
                name: "Virgin Islands (U.S.)",
                iso2: "VI",
                countrycode: "850",
                image: require("./flags/vi.png"),
                maps: []
            }, /*{
                name: "Wallis and Futuna",
                iso2: "WF",
                countrycode: "876",
                image: require("./flags/wf.png"),
				maps:[]
            },*/ {
                name: "Western Sahara",
                iso2: "EH",
                countrycode: "732",
                image: require("./flags/eh.png"),
                maps: ["world_mill"]
            }, {
                name: "Yemen",
                iso2: "YE",
                countrycode: "887",
                image: require("./flags/ye.png"),
                maps: ["world_mill"]
            }, {
                name: "Zambia",
                iso2: "ZM",
                countrycode: "894",
                image: require("./flags/zm.png"),
                maps: ["world_mill"]
            }, {
                name: "Zimbabwe",
                iso2: "ZW",
                countrycode: "716",
                image: require("./flags/zw.png"),
                maps: ["world_mill"]
            }, {
                name: "Somaliland",
                iso2: "XS",
                countrycode: "",
                image: require("./flags/xs.png"),
                maps: ["world_mill"]
            }, {
                name: "Kosovo",
                iso2: "XK",
                countrycode: "",
                image: require("./flags/xk.png"),
                maps: ["world_mill", "europe_mill"]
            }, {
                name: "Northern Cyprus (Turkish Republic of)",
                iso2: "XC",
                countrycode: "",
                image: require("./flags/xc.png"),
                maps: ["world_mill"]
            }]
        };
    }

    componentDidMount() {
        this.setRandom();
    }

    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    setRandom = () => {
        let shuffledCountries = this.shuffleArray(this.state.codes.filter(f => f.maps.some(m => m === this.state.selectedMap)));
        console.log(shuffledCountries);
        this.setState({ result: 'unknown', countryCode: shuffledCountries[0].iso2, countryName: shuffledCountries[0].name, countryImage: shuffledCountries[0].image });
    }

    handleRegionClick = (event, data) => {
        //this.refs.map.getMapObject.setFocus = "BE";
        //event.preventDefault();
        if (this.state.countryCode.toLowerCase() === data.toLowerCase()) {
            this.setState({ result: 'correct' });
        } else {
            this.setState({ result: 'wrong' });
        }
    }

    handleMapChange = (event) => {
        this.setState({ selectedMap: event.target.value });
        //this.setState({ [event.target.name]: event.target.value });
    }

    onResetClick = () => {
        this.setRandom();
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12">

                            <h1 style={{ fontFamily: "Baby Blocks", color: "white", margin: "30px" }}>Link flag to country</h1>

                            <div className="card border border-dark">

                                {(this.state.result === 'wrong') ?
                                    <div className="alert alert-danger" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 997 }}>
                                        Incorrect! <br />
                                        The answer was: {this.state.countryName}
                                    </div>
                                    : null
                                }
                                {(this.state.result === 'correct') ?
                                    <div className="alert alert-success" style={{ position: "absolute", width: "100%", height: "100%", zIndex: 997 }}>
                                        Correct!  <br />
                                        It was indeed: {this.state.countryName}
                                    </div>
                                    : null
                                }


                                <img className="" src={this.state.countryImage} style={{ position: "absolute", width: "220px", zIndex: 999 }} alt="Flag to guess" />
                                <div style={{ width: '100%', height: 600 }}>
                                    <VectorMap ref="map" map={this.state.selectedMap}
                                        backgroundColor="transparant"
                                        zoomOnScroll={true}
                                        regionsSelectable={true}
                                        regionsSelectableOne={true}
                                        regionStyle={
                                            {
                                                initial: {
                                                    fill: '#D3D3D3',
                                                    "fill-opacity": 1,
                                                    stroke: 'none',
                                                    "stroke-width": 0,
                                                    "stroke-opacity": 1
                                                },
                                                hover: {
                                                    "fill-opacity": 0.8,
                                                    cursor: 'pointer',
                                                    fill: '#0069d9'
                                                },
                                                selected: {
                                                    fill: 'yellow'
                                                },
                                                selectedHover: {
                                                }
                                            }
                                        }
                                        zoomButtons={false}
                                        containerStyle={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        containerClassName="map"
                                        onRegionClick={this.handleRegionClick}
                                        onRegionTipShow={
                                            function (event, label, code) {
                                                event.preventDefault();
                                                //label.html(
                                                /*'<b>'+label.html()+'</b></br>'+
                                                '<b>Unemployment rate: </b>'+'%'*/
                                                //);
                                            }
                                        }
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="form-inline">
                                <div className="form-group mb-2">
                                    <a className="btn btn-light btn-lg" href="/">Return to menu</a>
                                </div>

                                <div className="form-group mb-2">
                                    <select className="form-control-lg" id="selectMapType" 
                                            defaultValue={this.state.selectedMap}
                                            onChange={this.handleMapChange}>

                                        <option value="world_mill">World</option>
                                        <option value="europe_mill">Europe</option>
                                        <option value="oceania_mill">Oceania</option>
                                    </select>
                                </div>

                                <div className="form-group mb-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={this.onResetClick}>Try another flag</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Flags;