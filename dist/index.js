"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var isShallowEqual = require("shallowequal");
/* SELECTR */
function selectr(selector, options) {
    if (options === void 0) { options = { pure: true }; }
    return function wrapper(WrappedComponent) {
        return /** @class */ (function (_super) {
            __extends(SelectorComponent, _super);
            function SelectorComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selectedProps = selector(_this.props);
                return _this;
            }
            SelectorComponent.prototype.shouldComponentUpdate = function (nextProps) {
                var nextSelectedProps = selector(nextProps);
                if (options.pure && isShallowEqual(this.selectedProps, nextSelectedProps))
                    return false;
                this.selectedProps = nextSelectedProps;
                return true;
            };
            SelectorComponent.prototype.render = function () {
                return React.createElement(WrappedComponent, __assign({}, this.selectedProps));
            };
            return SelectorComponent;
        }(React.Component));
    };
}
/* EXPORT */
exports.default = selectr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLDZCQUErQjtBQUMvQiw2Q0FBK0M7QUFFL0MsYUFBYTtBQUViLFNBQVMsT0FBTyxDQUFHLFFBQWtCLEVBQUUsT0FBd0I7SUFBeEIsd0JBQUEsRUFBQSxZQUFZLElBQUksRUFBRSxJQUFJLEVBQUU7SUFFN0QsT0FBTyxTQUFTLE9BQU8sQ0FBRyxnQkFBZ0I7UUFFeEMsT0FBTztZQUFnQyxxQ0FBeUI7WUFBekQ7Z0JBQUEscUVBc0JOO2dCQXBCQyxtQkFBYSxHQUFHLFFBQVEsQ0FBRyxLQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7O1lBb0IxQyxDQUFDO1lBbEJDLGlEQUFxQixHQUFyQixVQUF3QixTQUFTO2dCQUUvQixJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBRyxTQUFTLENBQUUsQ0FBQztnQkFFakQsSUFBSyxPQUFPLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFFO29CQUFHLE9BQU8sS0FBSyxDQUFDO2dCQUU3RixJQUFJLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO2dCQUV2QyxPQUFPLElBQUksQ0FBQztZQUVkLENBQUM7WUFFRCxrQ0FBTSxHQUFOO2dCQUVFLE9BQU8sb0JBQUMsZ0JBQWdCLGVBQUssSUFBSSxDQUFDLGFBQWEsRUFBSSxDQUFDO1lBRXRELENBQUM7WUFFSCx3QkFBQztRQUFELENBQUMsQUF0Qk0sQ0FBZ0MsS0FBSyxDQUFDLFNBQVMsRUFzQjlDLENBQUM7SUFFWCxDQUFDLENBQUM7QUFFSixDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLE9BQU8sQ0FBQyJ9