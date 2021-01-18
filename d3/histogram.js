// [demo]
// d3.select()
// d3.selectAll()

// d3.select('h1').style('color','red')
// .attr('class','heading')
// .text('Update h1 tag')

// d3.select('body').append('p').text('First Paragraph')
// d3.select('body').append('p').text('Second Paragraph')
// d3.select('body').append('p').text('Third Paragraph')
// d3.selectAll('p').style('')


// [demo]
// let dataset=[1,2,3,4,5]
// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p')  //append paragraph for each data element
//     .text('d3 is awesome!!')


// [demo]
let dataset = [50, 98, 56, 39, 79, 89, 46, 120]  //数据集
// 定义svg图形宽高，以及柱状图间距
let svgWidth = 500
let svgHeight = 300
let barPadding = 5
let barWidth = (svgWidth / dataset.length)  //通过图形计算每个柱状宽度
//绘制svg图形
let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
let barChart = svg.selectAll("rect")
    .data(dataset) //绑定数组
    .enter() // 指定选择集的enter部分
    .append("rect") // 添加足够数量的矩形
    .attr("y", d => svgHeight - d) // d为数据集每一项的值, 取y坐标
    .attr("height", d => d) // 设定高度
    .attr("width", barWidth - barPadding) // 设定宽度
    .attr("transform", (d, i) => {  // 实际是计算每一项值的x坐标
        let translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });
// 在图形上方显示数值
let text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(d => d)
    .attr("y", (d, i) => svgHeight - d - 2)
    .attr("x", (d, i) => barWidth * i)
    .attr("fill", "#A64C38");


