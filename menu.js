export function menu() {
    var data = {
        root: [{
            header: 'Production',
            item: [{
                name: 'Production Summary #1',
                link: '0'
            },
            {
                name: 'Production Summary #2',
                link: '1'
            },
            {
                name: 'Production Summary #3',
                link: '2'
            }
            ]
        },
        {
            header: 'QC',
            item: [{
                name: 'QC Summary #1',
                link: '0'
            },
            {
                name: 'QC Summary #2',
                link: '1'
            },
            {
                name: 'QC Summary #3',
                link: '2'
            }
            ]
        }
        ]
    };

    return data;
}