var data = {
    root: [{
        header: 'Production',
        item: [{
            name: 'Production Summary #1',
            href: '0'
        },
        {
            name: 'Production Summary #2',
            href: '1'
        },
        {
            name: 'Production Summary #3',
            href: '2'
        }
        ]
    },
    {
        header: 'QC',
        item: [{
            name: 'QC Summary #1',
            href: '0'
        },
        {
            name: 'QC Summary #2',
            href: '1'
        },
        {
            name: 'QC Summary #3',
            href: '2'
        }
        ]
    }
    ]
};

var $navbarStart = $("#navbarStart");

$.each(data.root, function (index, value) {
    var divNavItem = $("<div>").addClass("navbar-item has-dropdown is-hoverable");
    var divNavLink = $("<a>").addClass("navbar-link")
    var divNavDropdown = $("<div>").addClass("navbar-dropdown is-boxed");

    divNavLink.append(value.header)
    divNavItem.append(divNavLink);
    divNavItem.append(divNavDropdown);

    $.each(value.item, function (itemIndex, itemValue) {
        divNavDropdown.append(
            $("<a>", {
                html: itemValue.name,
                href: '#' + itemValue.href
            }).addClass("navbar-item")
        )
    })

    $navbarStart.append(divNavItem);
});
