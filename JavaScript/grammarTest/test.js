function test() {
    const temp1 = [
        {
            "height": 1106,
            "id": 0,
            "left": 56,
            "score": 0.7603740096092224,
            "text": [],
            "themeColor": [
                "rgb(4, 162, 254)",
                "rgb(52, 244, 254)",
                "rgb(254, 151, 151)",
                "rgb(50, 64, 90)",
                "rgb(100, 131, 191)"
            ],
            "top": 272,
            "type": "HistogramWidget2",
            "version": "0.01",
            "width": 2916
        },
        {
            "height": 470,
            "id": 1,
            "left": 2947,
            "score": 0.8261532187461853,
            "text": [],
            "themeColor": [
                "rgb(3, 154, 245)",
                "rgb(43, 56, 86)",
                "rgb(106, 137, 198)",
                "rgb(97, 113, 146)",
                "rgb(58, 81, 128)"
            ],
            "top": 187,
            "type": "HistogramWidget2",
            "version": "0.01",
            "width": 799
        },
        {
            "height": 524,
            "id": 2,
            "left": 2972,
            "score": 0.8611611723899841,
            "text": [],
            "themeColor": [
                "rgb(4, 161, 254)",
                "rgb(254, 152, 151)",
                "rgb(52, 244, 254)",
                "rgb(54, 69, 98)",
                "rgb(99, 129, 188)"
            ],
            "top": 1535,
            "type": "BasicBarWidget",
            "version": "0.01",
            "width": 787
        },
        {
            "height": 508,
            "id": 3,
            "left": 2006,
            "score": 0.8731210827827454,
            "text": [],
            "themeColor": [
                "rgb(4, 161, 254)",
                "rgb(50, 234, 245)",
                "rgb(107, 138, 200)",
                "rgb(55, 71, 103)",
                "rgb(79, 106, 159)"
            ],
            "top": 1546,
            "type": "HistogramWidget2",
            "version": "0.01",
            "width": 853
        },
        {
            "height": 435,
            "id": 4,
            "left": 2991,
            "score": 0.8867700099945068,
            "text": ['334555'],
            "themeColor": [
                "rgb(50, 233, 244)",
                "rgb(4, 155, 244)",
                "rgb(254, 151, 151)",
                "rgb(97, 134, 188)",
                "rgb(44, 79, 121)"
            ],
            "top": 881,
            "type": "PieWidget",
            "version": "0.01",
            "width": 697
        },
        {
            "height": 511,
            "id": 5,
            "left": 87,
            "score": 0.8900414109230042,
            "text": ['1111'],
            "themeColor": [
                "rgb(35, 94, 141)",
                "rgb(43, 123, 166)",
                "rgb(28, 67, 110)",
                "rgb(28, 193, 246)",
                "rgb(104, 135, 196)"
            ],
            "top": 1548,
            "type": "LineWidget",
            "version": "0.01",
            "width": 869
        },
        {
            "height": 519,
            "id": 6,
            "left": 1075,
            "score": 0.9168745279312134,
            "text": ['开始'],
            "themeColor": [
                "rgb(49, 233, 244)",
                "rgb(4, 154, 244)",
                "rgb(241, 145, 147)",
                "rgb(100, 134, 191)",
                "rgb(52, 80, 117)"
            ],
            "top": 1537,
            "type": "PieWidget",
            "version": "0.01",
            "width": 799
        }
    ]
    // console.log(temp1)
    let result = temp1.filter((el) => { return (el.text.length > 0) })
    console.log(result)
}

function test2() {
    let array = [
        {
            date: '2016-05-02',
            name: 'Ethan',
            status: 'success',
            total: '81'
        },
        {
            date: '2016-05-04',
            name: 'Lynn',
            status: 'fail',
            tag: '50'
        },
        {
            date: '2016-05-01',
            name: 'Kevin',
            status: 'success',
            tag: '20'
        }];
    let filterStatus = "success";
    let filterNames = ['Lynn', 'Kevin'];
    let result = array.filter((a, i) => {
        return (a.status === filterStatus && filterNames.some(f => (f === a.name)))
    })
    console.log(result)
}

test()
// test2()