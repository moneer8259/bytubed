/* ***** BEGIN LICENSE BLOCK *****
 *
 * The contents of this file are subject to the GNU General Public License
 * Version 3 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 * http://www.gnu.org/copyleft/gpl.html
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing the rights and limitations under the
 * License.
 *
 * The Original Code is BYTubeD. The Initial Developer of the Original Code
 * is M S Ram (M.S.Ramaiah@gmail.com).
 *
 * Portions created by the Initial Developer are Copyright (C) 2010-2012 the
 * Initial Developer. All Rights Reserved.
 *
 * ***** END LICENSE BLOCK ***** */

IITK.CSE.CS213.BYTubeD.Main = {
    onLoad: function onLoad()
    {
        // this.strings = document.getElementById("BYTubeD-strings");
        document.getElementById("contentAreaContextMenu")
                .addEventListener("popupshowing", function(e) {
                        IITK.CSE.CS213.BYTubeD.Main.showContextMenu(e);
                    }, false);

    },

    showContextMenu: function showContextMenu(event) {
        // Show "BYTubeD" menu item always.
        // See http://kb.mozillazine.org/Adding_items_to_menus
        document.getElementById("context-BYTubeD").hidden = false;
    },

    onMenuItemCommand: function onMenuItemCommand(e)
    {
        try
        {
            var contentDocument = document.getElementById("content").contentDocument;

            window.openDialog("chrome://BYTubeD/content/selectionManager.xul", "BYTubeD",
                                "chrome,centerscreen,all,menubar=no", contentDocument);
        }
        catch(error)
        {
            IITK.CSE.CS213.BYTubeD.reportProblem(error, arguments.callee.name);
        }

    },

    onToolbarButtonCommand: function onToolbarButtonCommand(e)
    {
        // Reuse the function above.
        IITK.CSE.CS213.BYTubeD.Main.onMenuItemCommand(e);
    }

};

window.addEventListener("load", function(e) { IITK.CSE.CS213.BYTubeD.Main.onLoad(e); }, false);