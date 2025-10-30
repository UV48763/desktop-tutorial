// 確保頁面完全載入後才執行 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // 取得 HTML 頁面中 id 為 'pieChart' 的 Canvas 元素
    const ctx = document.getElementById('pieChart');

    // 檢查 Canvas 元素是否存在
    if (ctx) {
        
        // 1. 定義圖表所需數據
        
        // 模擬的全球人口年齡組數據 (以總人口的百分比計)
        const simulatedPopulationData = [
            12.5,  // 0-9 歲
            13.0,  // 10-19 歲
            13.5,  // 20-29 歲
            12.0,  // 30-39 歲
            11.0,  // 40-49 歲
            10.0,  // 50-59 歲
            8.5,   // 60-69 歲
            7.0,   // 70-79 歲
            6.0,   // 80-89 歲
            6.5    // 90歲及以上
        ];

        // 建立年齡組標籤 (0-9, 10-19, ..., 90 歲及以上)
        const ageLabels = [];
        for (let i = 0; i <= 80; i += 10) {
            ageLabels.push(`${i}-${i + 9} 歲`);
        }
        ageLabels.push('90 歲及以上'); 

        const data = {
            labels: ageLabels,
            datasets: [{
                label: '人口百分比 (%)',
                data: simulatedPopulationData,
                backgroundColor: [ // 顏色列表
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                    '#FF9F40', '#4D5360', '#A8DDA8', '#F7464A', '#5AD3D1'
                ],
                hoverOffset: 4 
            }]
        };

        // 2. 建立圓餅圖實例 (Pie Chart)
        new Chart(ctx, {
            type: 'pie', // 圖表類型：pie (圓餅圖)
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '全球每十歲人口分佈 (模擬數據)', 
                        font: { size: 16 }
                    },
                    tooltip: {
                        // 在提示框中顯示百分比
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.raw + ' %';
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }
});