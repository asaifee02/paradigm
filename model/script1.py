import sys
import pickle
import traceback

try:
    import pandas as pd
    pd.options.mode.chained_assignment = None  # default='warn'
    x=sys.argv[3]
    y=sys.argv[4]
    df = pd.read_csv(r'distanceF.csv')
    dict3= {'Aruba': 0, 'Afghanistan': 1, 'Angola': 2, 'Anguilla': 3, 'Albania': 4, 'Andorra': 5, 'United Arab Emirates': 6, 'Argentina': 7, 'Armenia': 8, 'American Samoa': 9, 'Antarctica': 10, 'French Southern Territories': 11, 'Antigua and Barbuda': 12, 'Australia': 13, 'Austria': 14, 'Azerbaijan': 15, 'Burundi': 16, 'Belgium': 17, 'Benin': 18, 'Bonaire, Sint Eustatius and Saba': 19, 'Burkina Faso': 20, 'Bangladesh': 21, 'Bulgaria': 22, 'Bahrain': 23, 'Bahamas': 24, 'Bosnia and Herzegovina': 25, 'Saint BarthÃ©lemy': 26, 'Belarus': 27, 'Belize': 28, 'Bermuda': 29, 'Bolivia (Plurinational State of)': 30, 'Brazil': 31, 'Barbados': 32, 'Bhutan': 33, 'Botswana': 34, 'Central African Republic': 35, 'Canada': 36, 'Cocos (Keeling) Islands': 37, 'Switzerland': 38, 'Chile': 39, 'China': 40, "CÃ´te d'Ivoire": 41, 'Cameroon': 42, 'Congo, Democratic Republic of the': 43, 'Congo': 44, 'Cook Islands': 45, 'Colombia': 46, 'Comoros': 47, 'Cabo Verde': 48, 'Costa Rica': 49, 'Cuba': 50, 'CuraÃ§ao': 51, 'Christmas Island': 52, 'Cayman Islands': 53, 'Cyprus': 54, 'Czechia': 55, 'Germany': 56, 'Djibouti': 57, 'Dominica': 58, 'Denmark': 59, 'Dominican Republic': 60, 'Algeria': 61, 'Ecuador': 62, 'Egypt': 63, 'Eritrea': 64, 'Western Sahara': 65, 'Spain': 66, 'Estonia': 67, 'Ethiopia': 68, 'Finland': 69, 'Fiji': 70, 'France': 71, 'Faroe Islands': 72, 'Micronesia (Federated States of)': 73, 'Gabon': 74, 'United Kingdom of Great Britain and Northern Ireland': 75, 'Georgia': 76, 'Guernsey': 77, 'Ghana': 78, 'Gibraltar': 79, 'Guinea': 80, 'Guadeloupe': 81, 'Gambia': 82, 'Guinea-Bissau': 83, 'Equatorial Guinea': 84, 'Greece': 85, 'Grenada': 86, 'Greenland': 87, 'Guatemala': 88, 'French Guiana': 89, 'Guam': 90, 'Guyana': 91, 'Hong Kong': 92, 'Honduras': 93, 'Croatia': 94, 'Haiti': 95, 'Hungary': 96, 'Indonesia': 97, 'Isle of Man': 98, 'India': 99, 'British Indian Ocean Territory': 100, 'Ireland': 101, 'Iran (Islamic Republic of)': 102, 'Iraq': 103, 'Iceland': 104, 'Israel': 105, 'Italy': 106, 'Jamaica': 107, 'Jersey': 108, 'Jordan': 109, 'Japan': 110, 'Kazakhstan': 111, 'Kenya': 112, 'Kyrgyzstan': 113, 'Cambodia': 114, 'Kiribati': 115, 'Saint Kitts and Nevis': 116, 'Kuwait': 117, 'Lebanon': 118, 'Liberia': 119, 'Libya': 120, 'Saint Lucia': 121, 'Liechtenstein': 122, 'Sri Lanka': 123, 'Lesotho': 124, 'Lithuania': 125, 'Luxembourg': 126, 'Latvia': 127, 'Macao': 128, 'Morocco': 129, 'Monaco': 130, 'Moldova, Republic of': 131, 'Madagascar': 132, 'Maldives': 133, 'Mexico': 134, 'Marshall Islands': 135, 'North Macedonia': 136, 'Mali': 137, 'Malta': 138, 'Myanmar': 139, 'Montenegro': 140, 'Mongolia': 141, 'Northern Mariana Islands': 142, 'Mozambique': 143, 'Mauritania': 144, 'Montserrat': 145, 'Martinique': 146, 'Mauritius': 147, 'Malawi': 148, 'Malaysia': 149, 'Mayotte': 150, 'Namibia': 151, 'New Caledonia': 152, 'Niger': 153, 'Norfolk Island': 154, 'Nigeria': 155, 'Nicaragua': 156, 'Niue': 157, 'Netherlands': 158, 'Norway': 159, 'Nepal': 160, 'Nauru': 161, 'New Zealand': 162, 'Oman': 163, 'Pakistan': 164, 'Panama': 165, 'Pitcairn': 166, 'Peru': 167, 'Philippines': 168, 'Palau': 169, 'Papua New Guinea': 170, 'Poland': 171, 'Puerto Rico': 172, 'Portugal': 173, 'Paraguay': 174, 'Palestine, State of': 175, 'French Polynesia': 176, 'Qatar': 177, 'RÃ©union': 178, 'Romania': 179, 'Russian Federation': 180, 'Rwanda': 181, 'Saudi Arabia': 182, 'Sudan': 183, 'Senegal': 184, 'Singapore': 185, 'South Georgia and the South Sandwich Islands': 186, 'Saint Helena, Ascension and Tristan da Cunha': 187, 'Svalbard and Jan Mayen': 188, 'Solomon Islands': 189, 'Sierra Leone': 190, 'El Salvador': 191, 'San Marino': 192, 'Somalia': 193, 'Saint Pierre and Miquelon': 194, 'Serbia': 195, 'South Sudan': 196, 'Sao Tome and Principe': 197, 'Suriname': 198, 'Slovakia': 199, 'Slovenia': 200, 'Sweden': 201, 'Eswatini': 202, 'Seychelles': 203, 'Syrian Arab Republic': 204, 'Turks and Caicos Islands': 205, 'Chad': 206, 'Togo': 207, 'Thailand': 208, 'Tajikistan': 209, 'Tokelau': 210, 'Turkmenistan': 211, 'Timor-Leste': 212, 'Tonga': 213, 'Trinidad and Tobago': 214, 'Tunisia': 215, 'Turkey': 216, 'Tuvalu': 217, 'Taiwan, Province of China': 218, 'Tanzania, United Republic of': 219, 'Uganda': 220, 'Ukraine': 221, 'Uruguay': 222, 'United States of America': 223, 'Uzbekistan': 224, 'Saint Vincent and the Grenadines': 225, 'Venezuela (Bolivarian Republic of)': 226, 'Viet Nam': 227, 'Vanuatu': 228, 'Wallis and Futuna': 229, 'Samoa': 230, 'Yemen': 231, 'South Africa': 232, 'Zambia': 233, 'Zimbabwe': 234}
    arg3=int(df[x][dict3[y]])
    # print('dist',arg3)
    loaded_model = pickle.load(open("logistic1", 'rb'))
    arg1=int(sys.argv[1])
    arg2=int(sys.argv[2])
    # arg3=float(sys.argv[3])


    result = loaded_model.predict([[arg1,arg2,arg3]])
    print('$',result[0])
except Exception as e: print(e)




