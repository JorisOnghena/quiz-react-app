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
            codes: [{
                name: "Afghanistan",
                iso2: "AF",
                countrycode: "004",
                image: require("./flags/af.png")
            },/* {
                name: "Åland Islands",
                iso2: "AX",
                countrycode: "248",
                image: require("./flags/ax.png")
            },*/ {
                name: "Albania",
                iso2: "AL",
                countrycode: "008",
                image: require("./flags/al.png")
            }, {
                name: "Algeria",
                iso2: "DZ",
                countrycode: "012",
                image: require("./flags/dz.png")
            }, /*{
                name: "American Samoa",
                iso2: "AS",
                countrycode: "016",
                image: require("./flags/as.png")
            },*/ {
                name: "Andorra",
                iso2: "AD",
                countrycode: "020",
                image: require("./flags/ad.png")
            }, {
                name: "Angola",
                iso2: "AO",
                countrycode: "024",
                image: require("./flags/ao.png")
            }, /*{
                name: "Anguilla",
                iso2: "AI",
                countrycode: "660",
                image: require("./flags/ai.png")
            }, {
                name: "Antarctica",
                iso2: "AQ",
                countrycode: "010",
                image: require("./flags/aq.png")
            },*/ {
                name: "Antigua and Barbuda",
                iso2: "AG",
                countrycode: "028",
                image: require("./flags/ag.png")
            }, {
                name: "Argentina",
                iso2: "AR",
                countrycode: "032",
                image: require("./flags/ar.png")
            }, {
                name: "Armenia",
                iso2: "AM",
                countrycode: "051",
                image: require("./flags/am.png")
            },/* {
                name: "Aruba",
                iso2: "AW",
                countrycode: "533",
                image: require("./flags/aw.png")
            },*/ {
                name: "Australia",
                iso2: "AU",
                countrycode: "036",
                image: require("./flags/au.png")
            }, {
                name: "Austria",
                iso2: "AT",
                countrycode: "040",
                image: require("./flags/at.png")
            }, {
                name: "Azerbaijan",
                iso2: "AZ",
                countrycode: "031",
                image: require("./flags/az.png")
            }, {
                name: "Bahamas",
                iso2: "BS",
                countrycode: "044",
                image: require("./flags/bs.png")
            }, {
                name: "Bahrain",
                iso2: "BH",
                countrycode: "048",
                image: require("./flags/bh.png")
            }, {
                name: "Bangladesh",
                iso2: "BD",
                countrycode: "050",
                image: require("./flags/bd.png")
            }, {
                name: "Barbados",
                iso2: "BB",
                countrycode: "052",
                image: require("./flags/bb.png")
            }, {
                name: "Belarus",
                iso2: "BY",
                countrycode: "112",
                image: require("./flags/by.png")
            }, {
                name: "Belgium",
                iso2: "BE",
                countrycode: "056",
                image: require("./flags/be.png")
            }, {
                name: "Belize",
                iso2: "BZ",
                countrycode: "084",
                image: require("./flags/bz.png")
            }, {
                name: "Benin",
                iso2: "BJ",
                countrycode: "204",
                image: require("./flags/bj.png")
            }, /*{
                name: "Bermuda",
                iso2: "BM",
                countrycode: "060",
                image: require("./flags/bm.png")
            }, */{
                name: "Bhutan",
                iso2: "BT",
                countrycode: "064",
                image: require("./flags/bt.png")
            }, {
                name: "Bolivia (Plurinational State of)",
                iso2: "BO",
                countrycode: "068",
                image: require("./flags/bo.png")
            },/* {
                name: "Bonaire, Sint Eustatius and Saba",
                iso2: "BQ",
                countrycode: "535",
                image: require("./flags/bq.png")
            },*/ {
                name: "Bosnia and Herzegovina",
                iso2: "BA",
                countrycode: "070",
                image: require("./flags/ba.png")
            }, {
                name: "Botswana",
                iso2: "BW",
                countrycode: "072",
                image: require("./flags/bw.png")
            }, /*{
                name: "Bouvet Island",
                iso2: "BV",
                countrycode: "074",
                image: require("./flags/bv.png")
            },*/ {
                name: "Brazil",
                iso2: "BR",
                countrycode: "076",
                image: require("./flags/br.png")
            }, {
                name: "British Indian Ocean Territory",
                iso2: "IO",
                countrycode: "086",
                image: require("./flags/io.png")
            }, {
                name: "Brunei Darussalam",
                iso2: "BN",
                countrycode: "096",
                image: require("./flags/bn.png")
            }, {
                name: "Bulgaria",
                iso2: "BG",
                countrycode: "100",
                image: require("./flags/bg.png")
            }, {
                name: "Burkina Faso",
                iso2: "BF",
                countrycode: "854",
                image: require("./flags/bf.png")
            }, {
                name: "Burundi",
                iso2: "BI",
                countrycode: "108",
                image: require("./flags/bi.png")
            }, {
                name: "Cabo Verde",
                iso2: "CV",
                countrycode: "132",
                image: require("./flags/cv.png")
            }, {
                name: "Cambodia",
                iso2: "KH",
                countrycode: "116",
                image: require("./flags/kh.png")
            }, {
                name: "Cameroon",
                iso2: "CM",
                countrycode: "120",
                image: require("./flags/cm.png")
            }, {
                name: "Canada",
                iso2: "CA",
                countrycode: "124",
                image: require("./flags/ca.png")
            }, {
                name: "Cayman Islands",
                iso2: "KY",
                countrycode: "136",
                image: require("./flags/ky.png")
            }, {
                name: "Central African Republic",
                iso2: "CF",
                countrycode: "140",
                image: require("./flags/cf.png")
            }, {
                name: "Chad",
                iso2: "TD",
                countrycode: "148",
                image: require("./flags/td.png")
            }, {
                name: "Chile",
                iso2: "CL",
                countrycode: "152",
                image: require("./flags/cl.png")
            }, {
                name: "China",
                iso2: "CN",
                countrycode: "156",
                image: require("./flags/cn.png")
            }, {
                name: "Christmas Island",
                iso2: "CX",
                countrycode: "162",
                image: require("./flags/cx.png")
            }, /*{
                name: "Cocos (Keeling) Islands",
                iso2: "CC",
                countrycode: "166",
                image: require("./flags/cc.png")
            }, */{
                name: "Colombia",
                iso2: "CO",
                countrycode: "170",
                image: require("./flags/co.png")
            }, {
                name: "Comoros",
                iso2: "KM",
                countrycode: "174",
                image: require("./flags/km.png")
            }, {
                name: "Congo",
                iso2: "CG",
                countrycode: "178",
                image: require("./flags/cg.png")
            }, {
                name: "Congo, Democratic Republic of the",
                iso2: "CD",
                countrycode: "180",
                image: require("./flags/cd.png")
            }, {
                name: "Cook Islands",
                iso2: "CK",
                countrycode: "184",
                image: require("./flags/ck.png")
            }, {
                name: "Costa Rica",
                iso2: "CR",
                countrycode: "188",
                image: require("./flags/cr.png")
            }, {
                name: "Côte d'Ivoire",
                iso2: "CI",
                countrycode: "384",
                image: require("./flags/ci.png")
            }, {
                name: "Croatia",
                iso2: "HR",
                countrycode: "191",
                image: require("./flags/hr.png")
            }, {
                name: "Cuba",
                iso2: "CU",
                countrycode: "192",
                image: require("./flags/cu.png")
            }, {
                name: "Curaçao",
                iso2: "CW",
                countrycode: "531",
                image: require("./flags/cw.png")
            }, {
                name: "Cyprus",
                iso2: "CY",
                countrycode: "196",
                image: require("./flags/cy.png")
            }, {
                name: "Czechia",
                iso2: "CZ",
                countrycode: "203",
                image: require("./flags/cz.png")
            }, {
                name: "Denmark",
                iso2: "DK",
                countrycode: "208",
                image: require("./flags/dk.png")
            }, {
                name: "Djibouti",
                iso2: "DJ",
                countrycode: "262",
                image: require("./flags/dj.png")
            }, {
                name: "Dominica",
                iso2: "DM",
                countrycode: "212",
                image: require("./flags/dm.png")
            }, {
                name: "Dominican Republic",
                iso2: "DO",
                countrycode: "214",
                image: require("./flags/do.png")
            }, {
                name: "Ecuador",
                iso2: "EC",
                countrycode: "218",
                image: require("./flags/ec.png")
            }, {
                name: "Egypt",
                iso2: "EG",
                countrycode: "818",
                image: require("./flags/eg.png")
            }, {
                name: "El Salvador",
                iso2: "SV",
                countrycode: "222",
                image: require("./flags/sv.png")
            }, {
                name: "Equatorial Guinea",
                iso2: "GQ",
                countrycode: "226",
                image: require("./flags/gq.png")
            }, {
                name: "Eritrea",
                iso2: "ER",
                countrycode: "232",
                image: require("./flags/er.png")
            }, {
                name: "Estonia",
                iso2: "EE",
                countrycode: "233",
                image: require("./flags/ee.png")
            }, {
                name: "Eswatini",
                iso2: "SZ",
                countrycode: "748",
                image: require("./flags/sz.png")
            }, {
                name: "Ethiopia",
                iso2: "ET",
                countrycode: "231",
                image: require("./flags/et.png")
            }, {
                name: "Falkland Islands (Malvinas)",
                iso2: "FK",
                countrycode: "238",
                image: require("./flags/fk.png")
            }, {
                name: "Faroe Islands",
                iso2: "FO",
                countrycode: "234",
                image: require("./flags/fo.png")
            }, {
                name: "Fiji",
                iso2: "FJ",
                countrycode: "242",
                image: require("./flags/fj.png")
            }, {
                name: "Finland",
                iso2: "FI",
                countrycode: "246",
                image: require("./flags/fi.png")
            }, {
                name: "France",
                iso2: "FR",
                countrycode: "250",
                image: require("./flags/fr.png")
            }, /*{
                name: "French Guiana",
                iso2: "GF",
                countrycode: "254",
                image: require("./flags/gf.png")
            },*/ {
                name: "French Polynesia",
                iso2: "PF",
                countrycode: "258",
                image: require("./flags/pf.png")
            }, {
                name: "French Southern Territories",
                iso2: "TF",
                countrycode: "260",
                image: require("./flags/tf.png")
            }, {
                name: "Gabon",
                iso2: "GA",
                countrycode: "266",
                image: require("./flags/ga.png")
            }, {
                name: "Gambia",
                iso2: "GM",
                countrycode: "270",
                image: require("./flags/gm.png")
            }, {
                name: "Georgia",
                iso2: "GE",
                countrycode: "268",
                image: require("./flags/ge.png")
            }, {
                name: "Germany",
                iso2: "DE",
                countrycode: "276",
                image: require("./flags/de.png")
            }, {
                name: "Ghana",
                iso2: "GH",
                countrycode: "288",
                image: require("./flags/gh.png")
            }, {
                name: "Gibraltar",
                iso2: "GI",
                countrycode: "292",
                image: require("./flags/gi.png")
            }, {
                name: "Greece",
                iso2: "GR",
                countrycode: "300",
                image: require("./flags/gr.png")
            }, {
                name: "Greenland",
                iso2: "GL",
                countrycode: "304",
                image: require("./flags/gl.png")
            }, {
                name: "Grenada",
                iso2: "GD",
                countrycode: "308",
                image: require("./flags/gd.png")
            }, /*{
                name: "Guadeloupe",
                iso2: "GP",
                countrycode: "312",
                image: require("./flags/gp.png")
            },*/ {
                name: "Guam",
                iso2: "GU",
                countrycode: "316",
                image: require("./flags/gu.png")
            }, {
                name: "Guatemala",
                iso2: "GT",
                countrycode: "320",
                image: require("./flags/gt.png")
            }, {
                name: "Guernsey",
                iso2: "GG",
                countrycode: "831",
                image: require("./flags/gg.png")
            }, {
                name: "Guinea",
                iso2: "GN",
                countrycode: "324",
                image: require("./flags/gn.png")
            }, {
                name: "Guinea-Bissau",
                iso2: "GW",
                countrycode: "624",
                image: require("./flags/gw.png")
            }, {
                name: "Guyana",
                iso2: "GY",
                countrycode: "328",
                image: require("./flags/gy.png")
            }, {
                name: "Haiti",
                iso2: "HT",
                countrycode: "332",
                image: require("./flags/ht.png")
            },/* {
                name: "Heard Island and McDonald Islands",
                iso2: "HM",
                countrycode: "334",
                image: require("./flags/hm.png")
            },*/ {
                name: "Holy See",
                iso2: "VA",
                countrycode: "336",
                image: require("./flags/va.png")
            }, {
                name: "Honduras",
                iso2: "HN",
                countrycode: "340",
                image: require("./flags/hn.png")
            }, {
                name: "Hong Kong",
                iso2: "HK",
                countrycode: "344",
                image: require("./flags/hk.png")
            }, {
                name: "Hungary",
                iso2: "HU",
                countrycode: "348",
                image: require("./flags/hu.png")
            }, {
                name: "Iceland",
                iso2: "IS",
                countrycode: "352",
                image: require("./flags/is.png")
            }, {
                name: "India",
                iso2: "IN",
                countrycode: "356",
                image: require("./flags/in.png")
            }, {
                name: "Indonesia",
                iso2: "ID",
                countrycode: "360",
                image: require("./flags/id.png")
            }, {
                name: "Iran (Islamic Republic of)",
                iso2: "IR",
                countrycode: "364",
                image: require("./flags/ir.png")
            }, {
                name: "Iraq",
                iso2: "IQ",
                countrycode: "368",
                image: require("./flags/iq.png")
            }, {
                name: "Ireland",
                iso2: "IE",
                countrycode: "372",
                image: require("./flags/ie.png")
            }, {
                name: "Isle of Man",
                iso2: "IM",
                countrycode: "833",
                image: require("./flags/im.png")
            }, {
                name: "Israel",
                iso2: "IL",
                countrycode: "376",
                image: require("./flags/il.png")
            }, {
                name: "Italy",
                iso2: "IT",
                countrycode: "380",
                image: require("./flags/it.png")
            }, {
                name: "Jamaica",
                iso2: "JM",
                countrycode: "388",
                image: require("./flags/jm.png")
            }, {
                name: "Japan",
                iso2: "JP",
                countrycode: "392",
                image: require("./flags/jp.png")
            }, {
                name: "Jersey",
                iso2: "JE",
                countrycode: "832",
                image: require("./flags/je.png")
            }, {
                name: "Jordan",
                iso2: "JO",
                countrycode: "400",
                image: require("./flags/jo.png")
            }, {
                name: "Kazakhstan",
                iso2: "KZ",
                countrycode: "398",
                image: require("./flags/kz.png")
            }, {
                name: "Kenya",
                iso2: "KE",
                countrycode: "404",
                image: require("./flags/ke.png")
            }, {
                name: "Kiribati",
                iso2: "KI",
                countrycode: "296",
                image: require("./flags/ki.png")
            }, {
                name: "Korea (Democratic People's Republic of)",
                iso2: "KP",
                countrycode: "408",
                image: require("./flags/kp.png")
            }, {
                name: "Korea, Republic of",
                iso2: "KR",
                countrycode: "410",
                image: require("./flags/kr.png")
            }, {
                name: "Kuwait",
                iso2: "KW",
                countrycode: "414",
                image: require("./flags/kw.png")
            }, {
                name: "Kyrgyzstan",
                iso2: "KG",
                countrycode: "417",
                image: require("./flags/kg.png")
            }, {
                name: "Lao People's Democratic Republic",
                iso2: "LA",
                countrycode: "418",
                image: require("./flags/la.png")
            }, {
                name: "Latvia",
                iso2: "LV",
                countrycode: "428",
                image: require("./flags/lv.png")
            }, {
                name: "Lebanon",
                iso2: "LB",
                countrycode: "422",
                image: require("./flags/lb.png")
            }, {
                name: "Lesotho",
                iso2: "LS",
                countrycode: "426",
                image: require("./flags/ls.png")
            }, {
                name: "Liberia",
                iso2: "LR",
                countrycode: "430",
                image: require("./flags/lr.png")
            }, {
                name: "Libya",
                iso2: "LY",
                countrycode: "434",
                image: require("./flags/ly.png")
            }, {
                name: "Liechtenstein",
                iso2: "LI",
                countrycode: "438",
                image: require("./flags/li.png")
            }, {
                name: "Lithuania",
                iso2: "LT",
                countrycode: "440",
                image: require("./flags/lt.png")
            }, {
                name: "Luxembourg",
                iso2: "LU",
                countrycode: "442",
                image: require("./flags/lu.png")
            }, {
                name: "Macao",
                iso2: "MO",
                countrycode: "446",
                image: require("./flags/mo.png")
            }, {
                name: "Madagascar",
                iso2: "MG",
                countrycode: "450",
                image: require("./flags/mg.png")
            }, {
                name: "Malawi",
                iso2: "MW",
                countrycode: "454",
                image: require("./flags/mw.png")
            }, {
                name: "Malaysia",
                iso2: "MY",
                countrycode: "458",
                image: require("./flags/my.png")
            }, {
                name: "Maldives",
                iso2: "MV",
                countrycode: "462",
                image: require("./flags/mv.png")
            }, {
                name: "Mali",
                iso2: "ML",
                countrycode: "466",
                image: require("./flags/ml.png")
            }, {
                name: "Malta",
                iso2: "MT",
                countrycode: "470",
                image: require("./flags/mt.png")
            }, {
                name: "Marshall Islands",
                iso2: "MH",
                countrycode: "584",
                image: require("./flags/mh.png")
            }, {
                name: "Martinique",
                iso2: "MQ",
                countrycode: "474",
                image: require("./flags/mq.png")
            }, {
                name: "Mauritania",
                iso2: "MR",
                countrycode: "478",
                image: require("./flags/mr.png")
            }, {
                name: "Mauritius",
                iso2: "MU",
                countrycode: "480",
                image: require("./flags/mu.png")
            },/* {
                name: "Mayotte",
                iso2: "YT",
                countrycode: "175",
                image: require("./flags/yt.png")
            },*/ {
                name: "Mexico",
                iso2: "MX",
                countrycode: "484",
                image: require("./flags/mx.png")
            }, {
                name: "Micronesia (Federated States of)",
                iso2: "FM",
                countrycode: "583",
                image: require("./flags/fm.png")
            }, {
                name: "Moldova, Republic of",
                iso2: "MD",
                countrycode: "498",
                image: require("./flags/md.png")
            }, {
                name: "Monaco",
                iso2: "MC",
                countrycode: "492",
                image: require("./flags/mc.png")
            }, {
                name: "Mongolia",
                iso2: "MN",
                countrycode: "496",
                image: require("./flags/mn.png")
            }, {
                name: "Montenegro",
                iso2: "ME",
                countrycode: "499",
                image: require("./flags/me.png")
            }, {
                name: "Montserrat",
                iso2: "MS",
                countrycode: "500",
                image: require("./flags/ms.png")
            }, {
                name: "Morocco",
                iso2: "MA",
                countrycode: "504",
                image: require("./flags/ma.png")
            }, {
                name: "Mozambique",
                iso2: "MZ",
                countrycode: "508",
                image: require("./flags/mz.png")
            }, {
                name: "Myanmar",
                iso2: "MM",
                countrycode: "104",
                image: require("./flags/mm.png")
            }, {
                name: "Namibia",
                iso2: "NA",
                countrycode: "516",
                image: require("./flags/na.png")
            }, {
                name: "Nauru",
                iso2: "NR",
                countrycode: "520",
                image: require("./flags/nr.png")
            }, {
                name: "Nepal",
                iso2: "NP",
                countrycode: "524",
                image: require("./flags/np.png")
            }, {
                name: "Netherlands",
                iso2: "NL",
                countrycode: "528",
                image: require("./flags/nl.png")
            }, {
                name: "New Caledonia",
                iso2: "NC",
                countrycode: "540",
                image: require("./flags/nc.png")
            }, {
                name: "New Zealand",
                iso2: "NZ",
                countrycode: "554",
                image: require("./flags/nz.png")
            }, {
                name: "Nicaragua",
                iso2: "NI",
                countrycode: "558",
                image: require("./flags/ni.png")
            }, {
                name: "Niger",
                iso2: "NE",
                countrycode: "562",
                image: require("./flags/ne.png")
            }, {
                name: "Nigeria",
                iso2: "NG",
                countrycode: "566",
                image: require("./flags/ng.png")
            }, {
                name: "Niue",
                iso2: "NU",
                countrycode: "570",
                image: require("./flags/nu.png")
            }, {
                name: "Norfolk Island",
                iso2: "NF",
                countrycode: "574",
                image: require("./flags/nf.png")
            }, {
                name: "North Macedonia",
                iso2: "MK",
                countrycode: "807",
                image: require("./flags/mk.png")
            }, {
                name: "Northern Mariana Islands",
                iso2: "MP",
                countrycode: "580",
                image: require("./flags/mp.png")
            }, {
                name: "Norway",
                iso2: "NO",
                countrycode: "578",
                image: require("./flags/no.png")
            }, {
                name: "Oman",
                iso2: "OM",
                countrycode: "512",
                image: require("./flags/om.png")
            }, {
                name: "Pakistan",
                iso2: "PK",
                countrycode: "586",
                image: require("./flags/pk.png")
            }, {
                name: "Palau",
                iso2: "PW",
                countrycode: "585",
                image: require("./flags/pw.png")
            }, {
                name: "Palestine, State of",
                iso2: "PS",
                countrycode: "275",
                image: require("./flags/ps.png")
            }, {
                name: "Panama",
                iso2: "PA",
                countrycode: "591",
                image: require("./flags/pa.png")
            }, {
                name: "Papua New Guinea",
                iso2: "PG",
                countrycode: "598",
                image: require("./flags/pg.png")
            }, {
                name: "Paraguay",
                iso2: "PY",
                countrycode: "600",
                image: require("./flags/py.png")
            }, {
                name: "Peru",
                iso2: "PE",
                countrycode: "604",
                image: require("./flags/pe.png")
            }, {
                name: "Philippines",
                iso2: "PH",
                countrycode: "608",
                image: require("./flags/ph.png")
            }, /*{
                name: "Pitcairn",
                iso2: "PN",
                countrycode: "612",
                image: require("./flags/pn.png")
            },*/ {
                name: "Poland",
                iso2: "PL",
                countrycode: "616",
                image: require("./flags/pl.png")
            }, {
                name: "Portugal",
                iso2: "PT",
                countrycode: "620",
                image: require("./flags/pt.png")
            }, {
                name: "Puerto Rico",
                iso2: "PR",
                countrycode: "630",
                image: require("./flags/pr.png")
            }, {
                name: "Qatar",
                iso2: "QA",
                countrycode: "634",
                image: require("./flags/qa.png")
            }, /*{
                name: "Réunion",
                iso2: "RE",
                countrycode: "638",
                image: require("./flags/re.png")
            },*/ {
                name: "Romania",
                iso2: "RO",
                countrycode: "642",
                image: require("./flags/ro.png")
            }, {
                name: "Russian Federation",
                iso2: "RU",
                countrycode: "643",
                image: require("./flags/ru.png")
            }, {
                name: "Rwanda",
                iso2: "RW",
                countrycode: "646",
                image: require("./flags/rw.png")
            }, /*{
                name: "Saint Barthélemy",
                iso2: "BL",
                countrycode: "652",
                image: require("./flags/bl.png")
            },*//* {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                iso2: "SH",
                countrycode: "654",
                image: require("./flags/sh.png")
            },*/ {
                name: "Saint Kitts and Nevis",
                iso2: "KN",
                countrycode: "659",
                image: require("./flags/kn.png")
            }, {
                name: "Saint Lucia",
                iso2: "LC",
                countrycode: "662",
                image: require("./flags/lc.png")
            }, /*{
                name: "Saint Martin (French part)",
                iso2: "MF",
                countrycode: "663",
                image: require("./flags/mf.png")
            },*//* {
                name: "Saint Pierre and Miquelon",
                iso2: "PM",
                countrycode: "666",
                image: require("./flags/pm.png")
            }, */{
                name: "Saint Vincent and the Grenadines",
                iso2: "VC",
                countrycode: "670",
                image: require("./flags/vc.png")
            }, {
                name: "Samoa",
                iso2: "WS",
                countrycode: "882",
                image: require("./flags/ws.png")
            }, {
                name: "San Marino",
                iso2: "SM",
                countrycode: "674",
                image: require("./flags/sm.png")
            }, {
                name: "Sao Tome and Principe",
                iso2: "ST",
                countrycode: "678",
                image: require("./flags/st.png")
            }, {
                name: "Saudi Arabia",
                iso2: "SA",
                countrycode: "682",
                image: require("./flags/sa.png")
            }, {
                name: "Senegal",
                iso2: "SN",
                countrycode: "686",
                image: require("./flags/sn.png")
            }, {
                name: "Serbia",
                iso2: "RS",
                countrycode: "688",
                image: require("./flags/rs.png")
            }, {
                name: "Seychelles",
                iso2: "SC",
                countrycode: "690",
                image: require("./flags/sc.png")
            }, {
                name: "Sierra Leone",
                iso2: "SL",
                countrycode: "694",
                image: require("./flags/sl.png")
            }, {
                name: "Singapore",
                iso2: "SG",
                countrycode: "702",
                image: require("./flags/sg.png")
            }, {
                name: "Sint Maarten (Dutch part)",
                iso2: "SX",
                countrycode: "534",
                image: require("./flags/sx.png")
            }, {
                name: "Slovakia",
                iso2: "SK",
                countrycode: "703",
                image: require("./flags/sk.png")
            }, {
                name: "Slovenia",
                iso2: "SI",
                countrycode: "705",
                image: require("./flags/si.png")
            }, {
                name: "Solomon Islands",
                iso2: "SB",
                countrycode: "090",
                image: require("./flags/sb.png")
            }, {
                name: "Somalia",
                iso2: "SO",
                countrycode: "706",
                image: require("./flags/so.png")
            }, {
                name: "South Africa",
                iso2: "ZA",
                countrycode: "710",
                image: require("./flags/za.png")
            }, {
                name: "South Georgia and the South Sandwich Islands",
                iso2: "GS",
                countrycode: "239",
                image: require("./flags/gs.png")
            }, {
                name: "South Sudan",
                iso2: "SS",
                countrycode: "728",
                image: require("./flags/ss.png")
            }, {
                name: "Spain",
                iso2: "ES",
                countrycode: "724",
                image: require("./flags/es.png")
            }, {
                name: "Sri Lanka",
                iso2: "LK",
                countrycode: "144",
                image: require("./flags/lk.png")
            }, {
                name: "Sudan",
                iso2: "SD",
                countrycode: "729",
                image: require("./flags/sd.png")
            }, {
                name: "Suriname",
                iso2: "SR",
                countrycode: "740",
                image: require("./flags/sr.png")
            }, /*{
                name: "Svalbard and Jan Mayen",
                iso2: "SJ",
                countrycode: "744",
                image: require("./flags/sj.png")
            },*/ {
                name: "Sweden",
                iso2: "SE",
                countrycode: "752",
                image: require("./flags/se.png")
            }, {
                name: "Switzerland",
                iso2: "CH",
                countrycode: "756",
                image: require("./flags/ch.png")
            }, {
                name: "Syrian Arab Republic",
                iso2: "SY",
                countrycode: "760",
                image: require("./flags/sy.png")
            }, {
                name: "Taiwan, Province of China",
                iso2: "TW",
                countrycode: "158",
                image: require("./flags/tw.png")
            }, {
                name: "Tajikistan",
                iso2: "TJ",
                countrycode: "762",
                image: require("./flags/tj.png")
            }, {
                name: "Tanzania, United Republic of",
                iso2: "TZ",
                countrycode: "834",
                image: require("./flags/tz.png")
            }, {
                name: "Thailand",
                iso2: "TH",
                countrycode: "764",
                image: require("./flags/th.png")
            }, {
                name: "Timor-Leste",
                iso2: "TL",
                countrycode: "626",
                image: require("./flags/tl.png")
            }, {
                name: "Togo",
                iso2: "TG",
                countrycode: "768",
                image: require("./flags/tg.png")
            }, {
                name: "Tokelau",
                iso2: "TK",
                countrycode: "772",
                image: require("./flags/tk.png")
            }, {
                name: "Tonga",
                iso2: "TO",
                countrycode: "776",
                image: require("./flags/to.png")
            }, {
                name: "Trinidad and Tobago",
                iso2: "TT",
                countrycode: "780",
                image: require("./flags/tt.png")
            }, {
                name: "Tunisia",
                iso2: "TN",
                countrycode: "788",
                image: require("./flags/tn.png")
            }, {
                name: "Turkey",
                iso2: "TR",
                countrycode: "792",
                image: require("./flags/tr.png")
            }, {
                name: "Turkmenistan",
                iso2: "TM",
                countrycode: "795",
                image: require("./flags/tm.png")
            }, {
                name: "Turks and Caicos Islands",
                iso2: "TC",
                countrycode: "796",
                image: require("./flags/tc.png")
            }, {
                name: "Tuvalu",
                iso2: "TV",
                countrycode: "798",
                image: require("./flags/tv.png")
            }, {
                name: "Uganda",
                iso2: "UG",
                countrycode: "800",
                image: require("./flags/ug.png")
            }, {
                name: "Ukraine",
                iso2: "UA",
                countrycode: "804",
                image: require("./flags/ua.png")
            }, {
                name: "United Arab Emirates",
                iso2: "AE",
                countrycode: "784",
                image: require("./flags/ae.png")
            }, {
                name: "United Kingdom of Great Britain and Northern Ireland",
                iso2: "GB",
                countrycode: "826",
                image: require("./flags/gb.png")
            }, {
                name: "United States of America",
                iso2: "US",
                countrycode: "840",
                image: require("./flags/us.png")
            }, /*{
                name: "United States Minor Outlying Islands",
                iso2: "UM",
                countrycode: "581",
                image: require("./flags/um.png")
            }, */{
                name: "Uruguay",
                iso2: "UY",
                countrycode: "858",
                image: require("./flags/uy.png")
            }, {
                name: "Uzbekistan",
                iso2: "UZ",
                countrycode: "860",
                image: require("./flags/uz.png")
            }, {
                name: "Vanuatu",
                iso2: "VU",
                countrycode: "548",
                image: require("./flags/vu.png")
            }, {
                name: "Venezuela (Bolivarian Republic of)",
                iso2: "VE",
                countrycode: "862",
                image: require("./flags/ve.png")
            }, {
                name: "Viet Nam",
                iso2: "VN",
                countrycode: "704",
                image: require("./flags/vn.png")
            }, {
                name: "Virgin Islands (British)",
                iso2: "VG",
                countrycode: "092",
                image: require("./flags/vg.png")
            }, {
                name: "Virgin Islands (U.S.)",
                iso2: "VI",
                countrycode: "850",
                image: require("./flags/vi.png")
            }, /*{
                name: "Wallis and Futuna",
                iso2: "WF",
                countrycode: "876",
                image: require("./flags/wf.png")
            },*/ {
                name: "Western Sahara",
                iso2: "EH",
                countrycode: "732",
                image: require("./flags/eh.png")
            }, {
                name: "Yemen",
                iso2: "YE",
                countrycode: "887",
                image: require("./flags/ye.png")
            }, {
                name: "Zambia",
                iso2: "ZM",
                countrycode: "894",
                image: require("./flags/zm.png")
            }, {
                name: "Zimbabwe",
                iso2: "ZW",
                countrycode: "716",
                image: require("./flags/zw.png")
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
        let shuffledCountries = this.shuffleArray(this.state.codes);
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
                                <div className="alert alert-danger" style={{position: "absolute", width: "100%", height: "100%", zIndex: 997}}>
                                    Incorrect! <br />
                                    The answer was: {this.state.countryName}
                                </div>
                                : null
                            }
                            {(this.state.result === 'correct') ?
                                <div className="alert alert-success" style={{position: "absolute", width: "100%", height: "100%", zIndex: 997}}>
                                    Correct!  <br />
                                    It was indeed: {this.state.countryName}
                                </div>
                                : null
                            }
                            

                            <img className="" src={this.state.countryImage} style={{position: "absolute", width: "220px", zIndex: 999}} />
                                <div style={{ width: '100%', height: 600 }}>
                                    <VectorMap ref="map" map={'world_mill'}
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
                            <a class="btn btn-light btn-lg" href="/">Return to menu</a>&nbsp;
                            <button type="button" class="btn btn-primary btn-lg" onClick={this.onResetClick}>Try another flag</button>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Flags;