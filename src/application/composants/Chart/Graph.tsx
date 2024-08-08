import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const genererEtiquettesSemaine = () => {
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const aujourdHui = new Date();
    const etiquettes = [];
    
    const indexJourActuel = aujourdHui.getDay();

    for (let i = 0; i < 7; i++) {
        const jour = new Date(aujourdHui);
        jour.setDate(aujourdHui.getDate() - indexJourActuel + i);
        const nomJour = joursSemaine[jour.getDay()];
        const numeroJour = jour.getDate().toString().padStart(2, '0');
        const numeroMois = (jour.getMonth() + 1).toString().padStart(2, '0');
        etiquettes.push(`${nomJour}, ${numeroJour}/${numeroMois}`);
    }
    
    return etiquettes;
};

export const GraphiqueSommeil1 = () => {
    const etiquettes = genererEtiquettesSemaine();
    
    return (
        <>
            <div className="carte-donnees sommeil"></div>
            <div className="carte-donnees heure-coucher">
                <Line 
                    data={{
                        labels: etiquettes,
                        datasets: [
                            {
                                label: "Heure de coucher",
                                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                                borderColor: 'rgba(75, 192, 192, 1)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderWidth: 3,
                                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2,
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                                tension: 0.4 // Adoucir la courbe
                            }
                        ]
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Heure de coucher par jour',
                                font: {
                                    size: 24
                                },
                                padding: {
                                    top: 10,
                                    bottom: 30
                                },
                                color: '#333'
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 14
                                    },
                                    color: '#333'
                                }
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                titleFont: {
                                    size: 16
                                },
                                bodyFont: {
                                    size: 14
                                },
                                padding: 10,
                                cornerRadius: 8
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: 'Jour de la semaine',
                                    font: {
                                        size: 18
                                    },
                                    color: '#666'
                                },
                                ticks: {
                                    font: {
                                        size: 14
                                    },
                                    color: '#333'
                                }
                            },
                            y: {
                                grid: {
                                    color: 'rgba(200, 200, 200, 0.2)',
                                    lineWidth: 1
                                },
                                title: {
                                    display: true,
                                    text: 'Heure',
                                    font: {
                                        size: 18
                                    },
                                    color: '#666'
                                },
                                ticks: {
                                    font: {
                                        size: 14
                                    },
                                    color: '#333'
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="carte-donnees heure-coucher"></div>
        </>
    );
};
export const GraphiqueSommeil2 = () => {
    const etiquettes = genererEtiquettesSemaine();
    
    return (
        <>
            <div className="carte-donnees sommeil"></div>
            <div className="carte-donnees heure-reveil">
                <Line 
                    data={{
                        labels: etiquettes,
                        datasets: [
                            {
                                label: "Heure de reveil",
                                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                                borderColor: 'rgba(75, 192, 192, 1)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderWidth: 3,
                                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2,
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                                tension: 0.4 // Adoucir la courbe
                            }
                        ]
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Heure de reveil par jour',
                                font: {
                                    size: 24
                                },
                                padding: {
                                    top: 10,
                                    bottom: 30
                                },
                                color: '#333'
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 14
                                    },
                                    color: '#333'
                                }
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                titleFont: {
                                    size: 16
                                },
                                bodyFont: {
                                    size: 14
                                },
                                padding: 10,
                                cornerRadius: 8
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: 'Jour de la semaine',
                                    font: {
                                        size: 18
                                    },
                                    color: '#666'
                                },
                                ticks: {
                                    font: {
                                        size: 14
                                    },
                                    color: '#333'
                                }
                            },
                            y: {
                                grid: {
                                    color: 'rgba(200, 200, 200, 0.2)',
                                    lineWidth: 1
                                },
                                title: {
                                    display: true,
                                    text: 'Heure',
                                    font: {
                                        size: 18
                                    },
                                    color: '#666'
                                },
                                ticks: {
                                    font: {
                                        size: 14
                                    },
                                    color: '#333'
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="carte-donnees heure-reveil"></div>
        </>
    );
};

export const GraphiqueRecap = () => {
    const etiquettes = genererEtiquettesSemaine();
    
    return (
        <div className="graph-container">
            <Line 
                data={{
                    labels: etiquettes,
                    datasets: [
                        {
                            label: "Heure de coucher",
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                            tension: 0.4 // Adoucir la courbe
                        },
                        {
                            label: "Heure de réveil",
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                            borderColor: 'rgba(153, 102, 255, 1)',
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                            pointBorderColor: '#fff',
                            pointBorderWidth: 2,
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255, 159, 64, 1)',
                            tension: 0.4 // Adoucir la courbe
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Heures de coucher et de réveil par jour',
                            font: {
                                size: 24
                            },
                            padding: {
                                top: 10,
                                bottom: 30
                            },
                            color: '#333'
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 14
                                },
                                color: '#333'
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            titleFont: {
                                size: 16
                            },
                            bodyFont: {
                                size: 14
                            },
                            padding: 10,
                            cornerRadius: 8
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Jour de la semaine',
                                font: {
                                    size: 18
                                },
                                color: '#666'
                            },
                            ticks: {
                                font: {
                                    size: 14
                                },
                                color: '#333'
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(200, 200, 200, 0.2)',
                                lineWidth: 1
                            },
                            title: {
                                display: true,
                                text: 'Heure',
                                font: {
                                    size: 18
                                },
                                color: '#666'
                            },
                            ticks: {
                                font: {
                                    size: 14
                                },
                                color: '#333'
                            }
                        }
                    }
                }}
               
            />
        </div>
    );
};
