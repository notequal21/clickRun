(() => {
    var __webpack_modules__ = {
        19: module => {
            /*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(window, (function() {
                return function() {
                    "use strict";
                    var __webpack_modules__ = {
                        282: function(__unused_webpack_module, exports, __nested_webpack_require_632__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
                            var constants_1 = __nested_webpack_require_632__(883);
                            var addChoice = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_CHOICE,
                                    value,
                                    label,
                                    id,
                                    groupId,
                                    disabled,
                                    elementId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addChoice = addChoice;
                            var filterChoices = function(results) {
                                return {
                                    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                                    results
                                };
                            };
                            exports.filterChoices = filterChoices;
                            var activateChoices = function(active) {
                                if (active === void 0) active = true;
                                return {
                                    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                                    active
                                };
                            };
                            exports.activateChoices = activateChoices;
                            var clearChoices = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                                };
                            };
                            exports.clearChoices = clearChoices;
                        },
                        783: function(__unused_webpack_module, exports, __nested_webpack_require_2068__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.addGroup = void 0;
                            var constants_1 = __nested_webpack_require_2068__(883);
                            var addGroup = function(_a) {
                                var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_GROUP,
                                    value,
                                    id,
                                    active,
                                    disabled
                                };
                            };
                            exports.addGroup = addGroup;
                        },
                        464: function(__unused_webpack_module, exports, __nested_webpack_require_2595__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.highlightItem = exports.removeItem = exports.addItem = void 0;
                            var constants_1 = __nested_webpack_require_2595__(883);
                            var addItem = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_ITEM,
                                    value,
                                    label,
                                    id,
                                    choiceId,
                                    groupId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addItem = addItem;
                            var removeItem = function(id, choiceId) {
                                return {
                                    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                                    id,
                                    choiceId
                                };
                            };
                            exports.removeItem = removeItem;
                            var highlightItem = function(id, highlighted) {
                                return {
                                    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                                    id,
                                    highlighted
                                };
                            };
                            exports.highlightItem = highlightItem;
                        },
                        137: function(__unused_webpack_module, exports, __nested_webpack_require_3779__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
                            var constants_1 = __nested_webpack_require_3779__(883);
                            var clearAll = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_ALL
                                };
                            };
                            exports.clearAll = clearAll;
                            var resetTo = function(state) {
                                return {
                                    type: constants_1.ACTION_TYPES.RESET_TO,
                                    state
                                };
                            };
                            exports.resetTo = resetTo;
                            var setIsLoading = function(isLoading) {
                                return {
                                    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                                    isLoading
                                };
                            };
                            exports.setIsLoading = setIsLoading;
                        },
                        373: function(__unused_webpack_module, exports, __nested_webpack_require_4494__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var deepmerge_1 = __importDefault(__nested_webpack_require_4494__(996));
                            var fuse_js_1 = __importDefault(__nested_webpack_require_4494__(221));
                            var choices_1 = __nested_webpack_require_4494__(282);
                            var groups_1 = __nested_webpack_require_4494__(783);
                            var items_1 = __nested_webpack_require_4494__(464);
                            var misc_1 = __nested_webpack_require_4494__(137);
                            var components_1 = __nested_webpack_require_4494__(520);
                            var constants_1 = __nested_webpack_require_4494__(883);
                            var defaults_1 = __nested_webpack_require_4494__(789);
                            var utils_1 = __nested_webpack_require_4494__(799);
                            var reducers_1 = __nested_webpack_require_4494__(655);
                            var store_1 = __importDefault(__nested_webpack_require_4494__(744));
                            var templates_1 = __importDefault(__nested_webpack_require_4494__(686));
                            var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                            var USER_DEFAULTS = {};
                            var Choices = function() {
                                function Choices(element, userConfig) {
                                    if (element === void 0) element = "[data-choice]";
                                    if (userConfig === void 0) userConfig = {};
                                    var _this = this;
                                    if (userConfig.allowHTML === void 0) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                                    this.config = deepmerge_1.default.all([ defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig ], {
                                        arrayMerge: function(_, sourceArray) {
                                            return __spreadArray([], sourceArray, true);
                                        }
                                    });
                                    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                                    if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                                    var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                                    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                                    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                                    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                                    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                                    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                                    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                                    if (![ "auto", "always" ].includes("".concat(this.config.renderSelectedChoices))) this.config.renderSelectedChoices = "auto";
                                    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                                        var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                                        this.config.addItemFilter = re.test.bind(re);
                                    }
                                    if (this._isTextElement) this.passedElement = new components_1.WrappedInput({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        delimiter: this.config.delimiter
                                    }); else this.passedElement = new components_1.WrappedSelect({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        template: function(data) {
                                            return _this._templates.option(data);
                                        }
                                    });
                                    this.initialised = false;
                                    this._store = new store_1.default;
                                    this._initialState = reducers_1.defaultState;
                                    this._currentState = reducers_1.defaultState;
                                    this._prevState = reducers_1.defaultState;
                                    this._currentValue = "";
                                    this._canSearch = !!this.config.searchEnabled;
                                    this._isScrollingOnIe = false;
                                    this._highlightPosition = 0;
                                    this._wasTap = true;
                                    this._placeholderValue = this._generatePlaceholderValue();
                                    this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                                    this._direction = this.passedElement.dir;
                                    if (!this._direction) {
                                        var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                                        var documentDirection = window.getComputedStyle(document.documentElement).direction;
                                        if (elementDirection !== documentDirection) this._direction = elementDirection;
                                    }
                                    this._idNames = {
                                        itemChoice: "item-choice"
                                    };
                                    if (this._isSelectElement) {
                                        this._presetGroups = this.passedElement.optionGroups;
                                        this._presetOptions = this.passedElement.options;
                                    }
                                    this._presetChoices = this.config.choices;
                                    this._presetItems = this.config.items;
                                    if (this.passedElement.value && this._isTextElement) {
                                        var splitValues = this.passedElement.value.split(this.config.delimiter);
                                        this._presetItems = this._presetItems.concat(splitValues);
                                    }
                                    if (this.passedElement.options) this.passedElement.options.forEach((function(option) {
                                        _this._presetChoices.push({
                                            value: option.value,
                                            label: option.innerHTML,
                                            selected: !!option.selected,
                                            disabled: option.disabled || option.parentNode.disabled,
                                            placeholder: option.value === "" || option.hasAttribute("placeholder"),
                                            customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
                                        });
                                    }));
                                    this._render = this._render.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                    this._onKeyUp = this._onKeyUp.bind(this);
                                    this._onKeyDown = this._onKeyDown.bind(this);
                                    this._onClick = this._onClick.bind(this);
                                    this._onTouchMove = this._onTouchMove.bind(this);
                                    this._onTouchEnd = this._onTouchEnd.bind(this);
                                    this._onMouseDown = this._onMouseDown.bind(this);
                                    this._onMouseOver = this._onMouseOver.bind(this);
                                    this._onFormReset = this._onFormReset.bind(this);
                                    this._onSelectKey = this._onSelectKey.bind(this);
                                    this._onEnterKey = this._onEnterKey.bind(this);
                                    this._onEscapeKey = this._onEscapeKey.bind(this);
                                    this._onDirectionKey = this._onDirectionKey.bind(this);
                                    this._onDeleteKey = this._onDeleteKey.bind(this);
                                    if (this.passedElement.isActive) {
                                        if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                                            element
                                        });
                                        this.initialised = true;
                                        return;
                                    }
                                    this.init();
                                }
                                Object.defineProperty(Choices, "defaults", {
                                    get: function() {
                                        return Object.preventExtensions({
                                            get options() {
                                                return USER_DEFAULTS;
                                            },
                                            get templates() {
                                                return templates_1.default;
                                            }
                                        });
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Choices.prototype.init = function() {
                                    if (this.initialised) return;
                                    this._createTemplates();
                                    this._createElements();
                                    this._createStructure();
                                    this._store.subscribe(this._render);
                                    this._render();
                                    this._addEventListeners();
                                    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                                    if (shouldDisable) this.disable();
                                    this.initialised = true;
                                    var callbackOnInit = this.config.callbackOnInit;
                                    if (callbackOnInit && typeof callbackOnInit === "function") callbackOnInit.call(this);
                                };
                                Choices.prototype.destroy = function() {
                                    if (!this.initialised) return;
                                    this._removeEventListeners();
                                    this.passedElement.reveal();
                                    this.containerOuter.unwrap(this.passedElement.element);
                                    this.clearStore();
                                    if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                                    this._templates = templates_1.default;
                                    this.initialised = false;
                                };
                                Choices.prototype.enable = function() {
                                    if (this.passedElement.isDisabled) this.passedElement.enable();
                                    if (this.containerOuter.isDisabled) {
                                        this._addEventListeners();
                                        this.input.enable();
                                        this.containerOuter.enable();
                                    }
                                    return this;
                                };
                                Choices.prototype.disable = function() {
                                    if (!this.passedElement.isDisabled) this.passedElement.disable();
                                    if (!this.containerOuter.isDisabled) {
                                        this._removeEventListeners();
                                        this.input.disable();
                                        this.containerOuter.disable();
                                    }
                                    return this;
                                };
                                Choices.prototype.highlightItem = function(item, runEvent) {
                                    if (runEvent === void 0) runEvent = true;
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, true));
                                    if (runEvent) this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.unhighlightItem = function(item) {
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, false));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.highlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.highlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.unhighlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.unhighlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItemsByValue = function(value) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(item) {
                                        return item.value === value;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItems = function(excludedId) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(_a) {
                                        var id = _a.id;
                                        return id !== excludedId;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeHighlightedItems = function(runEvent) {
                                    var _this = this;
                                    if (runEvent === void 0) runEvent = false;
                                    this._store.highlightedActiveItems.forEach((function(item) {
                                        _this._removeItem(item);
                                        if (runEvent) _this._triggerChange(item.value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.showDropdown = function(preventInputFocus) {
                                    var _this = this;
                                    if (this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.show();
                                        _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                                        if (!preventInputFocus && _this._canSearch) _this.input.focus();
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.hideDropdown = function(preventInputBlur) {
                                    var _this = this;
                                    if (!this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.hide();
                                        _this.containerOuter.close();
                                        if (!preventInputBlur && _this._canSearch) {
                                            _this.input.removeActiveDescendant();
                                            _this.input.blur();
                                        }
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.getValue = function(valueOnly) {
                                    if (valueOnly === void 0) valueOnly = false;
                                    var values = this._store.activeItems.reduce((function(selectedItems, item) {
                                        var itemValue = valueOnly ? item.value : item;
                                        selectedItems.push(itemValue);
                                        return selectedItems;
                                    }), []);
                                    return this._isSelectOneElement ? values[0] : values;
                                };
                                Choices.prototype.setValue = function(items) {
                                    var _this = this;
                                    if (!this.initialised) return this;
                                    items.forEach((function(value) {
                                        return _this._setChoiceOrItem(value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoiceByValue = function(value) {
                                    var _this = this;
                                    if (!this.initialised || this._isTextElement) return this;
                                    var choiceValue = Array.isArray(value) ? value : [ value ];
                                    choiceValue.forEach((function(val) {
                                        return _this._findAndSelectChoiceByValue(val);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                                    var _this = this;
                                    if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
                                    if (value === void 0) value = "value";
                                    if (label === void 0) label = "label";
                                    if (replaceChoices === void 0) replaceChoices = false;
                                    if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                                    if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                                    if (typeof value !== "string" || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                                    if (replaceChoices) this.clearChoices();
                                    if (typeof choicesArrayOrFetcher === "function") {
                                        var fetcher_1 = choicesArrayOrFetcher(this);
                                        if (typeof Promise === "function" && fetcher_1 instanceof Promise) return new Promise((function(resolve) {
                                            return requestAnimationFrame(resolve);
                                        })).then((function() {
                                            return _this._handleLoadingState(true);
                                        })).then((function() {
                                            return fetcher_1;
                                        })).then((function(data) {
                                            return _this.setChoices(data, value, label, replaceChoices);
                                        })).catch((function(err) {
                                            if (!_this.config.silent) console.error(err);
                                        })).then((function() {
                                            return _this._handleLoadingState(false);
                                        })).then((function() {
                                            return _this;
                                        }));
                                        if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                                        return this.setChoices(fetcher_1, value, label, false);
                                    }
                                    if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                                    this.containerOuter.removeLoadingState();
                                    this._startLoading();
                                    choicesArrayOrFetcher.forEach((function(groupOrChoice) {
                                        if (groupOrChoice.choices) _this._addGroup({
                                            id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                            group: groupOrChoice,
                                            valueKey: value,
                                            labelKey: label
                                        }); else {
                                            var choice = groupOrChoice;
                                            _this._addChoice({
                                                value: choice[value],
                                                label: choice[label],
                                                isSelected: !!choice.selected,
                                                isDisabled: !!choice.disabled,
                                                placeholder: !!choice.placeholder,
                                                customProperties: choice.customProperties
                                            });
                                        }
                                    }));
                                    this._stopLoading();
                                    return this;
                                };
                                Choices.prototype.clearChoices = function() {
                                    this._store.dispatch((0, choices_1.clearChoices)());
                                    return this;
                                };
                                Choices.prototype.clearStore = function() {
                                    this._store.dispatch((0, misc_1.clearAll)());
                                    return this;
                                };
                                Choices.prototype.clearInput = function() {
                                    var shouldSetInputWidth = !this._isSelectOneElement;
                                    this.input.clear(shouldSetInputWidth);
                                    if (!this._isTextElement && this._canSearch) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                    return this;
                                };
                                Choices.prototype._render = function() {
                                    if (this._store.isLoading()) return;
                                    this._currentState = this._store.state;
                                    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                                    var shouldRenderChoices = this._isSelectElement;
                                    var shouldRenderItems = this._currentState.items !== this._prevState.items;
                                    if (!stateChanged) return;
                                    if (shouldRenderChoices) this._renderChoices();
                                    if (shouldRenderItems) this._renderItems();
                                    this._prevState = this._currentState;
                                };
                                Choices.prototype._renderChoices = function() {
                                    var _this = this;
                                    var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                                    var choiceListFragment = document.createDocumentFragment();
                                    this.choiceList.clear();
                                    if (this.config.resetScrollPosition) requestAnimationFrame((function() {
                                        return _this.choiceList.scrollToTop();
                                    }));
                                    if (activeGroups.length >= 1 && !this._isSearching) {
                                        var activePlaceholders = activeChoices.filter((function(activeChoice) {
                                            return activeChoice.placeholder === true && activeChoice.groupId === -1;
                                        }));
                                        if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                                        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                                    } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                                    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                                        var activeItems = this._store.activeItems;
                                        var canAddItem = this._canAddItem(activeItems, this.input.value);
                                        if (canAddItem.response) {
                                            this.choiceList.append(choiceListFragment);
                                            this._highlightChoice();
                                        } else {
                                            var notice = this._getTemplate("notice", canAddItem.notice);
                                            this.choiceList.append(notice);
                                        }
                                    } else {
                                        var dropdownItem = void 0;
                                        notice = void 0;
                                        if (this._isSearching) {
                                            notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-results");
                                        } else {
                                            notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-choices");
                                        }
                                        this.choiceList.append(dropdownItem);
                                    }
                                };
                                Choices.prototype._renderItems = function() {
                                    var activeItems = this._store.activeItems || [];
                                    this.itemList.clear();
                                    var itemListFragment = this._createItemsFragment(activeItems);
                                    if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                                };
                                Choices.prototype._createGroupsFragment = function(groups, choices, fragment) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    var getGroupChoices = function(group) {
                                        return choices.filter((function(choice) {
                                            if (_this._isSelectOneElement) return choice.groupId === group.id;
                                            return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                                        }));
                                    };
                                    if (this.config.shouldSort) groups.sort(this.config.sorter);
                                    groups.forEach((function(group) {
                                        var groupChoices = getGroupChoices(group);
                                        if (groupChoices.length >= 1) {
                                            var dropdownGroup = _this._getTemplate("choiceGroup", group);
                                            fragment.appendChild(dropdownGroup);
                                            _this._createChoicesFragment(groupChoices, fragment, true);
                                        }
                                    }));
                                    return fragment;
                                };
                                Choices.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    if (withinGroup === void 0) withinGroup = false;
                                    var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                                    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                                    var appendChoice = function(choice) {
                                        var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                                        if (shouldRender) {
                                            var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                                            fragment.appendChild(dropdownItem);
                                        }
                                    };
                                    var rendererableChoices = choices;
                                    if (renderSelectedChoices === "auto" && !this._isSelectOneElement) rendererableChoices = choices.filter((function(choice) {
                                        return !choice.selected;
                                    }));
                                    var _b = rendererableChoices.reduce((function(acc, choice) {
                                        if (choice.placeholder) acc.placeholderChoices.push(choice); else acc.normalChoices.push(choice);
                                        return acc;
                                    }), {
                                        placeholderChoices: [],
                                        normalChoices: []
                                    }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                                    if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                                    var choiceLimit = rendererableChoices.length;
                                    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                                    if (this._isSearching) choiceLimit = searchResultLimit; else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                                    for (var i = 0; i < choiceLimit; i += 1) if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                                    return fragment;
                                };
                                Choices.prototype._createItemsFragment = function(items, fragment) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                                    if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                                    if (this._isTextElement) this.passedElement.value = items.map((function(_a) {
                                        var value = _a.value;
                                        return value;
                                    })).join(this.config.delimiter); else this.passedElement.options = items;
                                    var addItemToFragment = function(item) {
                                        var listItem = _this._getTemplate("item", item, removeItemButton);
                                        fragment.appendChild(listItem);
                                    };
                                    items.forEach(addItemToFragment);
                                    return fragment;
                                };
                                Choices.prototype._triggerChange = function(value) {
                                    if (value === void 0 || value === null) return;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                                        value
                                    });
                                };
                                Choices.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                                    this._addItem({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.label,
                                        choiceId: placeholderChoice.id,
                                        groupId: placeholderChoice.groupId,
                                        placeholder: placeholderChoice.placeholder
                                    });
                                    this._triggerChange(placeholderChoice.value);
                                };
                                Choices.prototype._handleButtonAction = function(activeItems, element) {
                                    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                                    var itemId = element.parentNode && element.parentNode.dataset.id;
                                    var itemToRemove = itemId && activeItems.find((function(item) {
                                        return item.id === parseInt(itemId, 10);
                                    }));
                                    if (!itemToRemove) return;
                                    this._removeItem(itemToRemove);
                                    this._triggerChange(itemToRemove.value);
                                    if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
                                };
                                Choices.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                                    var _this = this;
                                    if (hasShiftKey === void 0) hasShiftKey = false;
                                    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                                    var passedId = element.dataset.id;
                                    activeItems.forEach((function(item) {
                                        if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) _this.highlightItem(item); else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
                                    }));
                                    this.input.focus();
                                };
                                Choices.prototype._handleChoiceAction = function(activeItems, element) {
                                    if (!activeItems || !element) return;
                                    var id = element.dataset.id;
                                    var choice = id && this._store.getChoiceById(id);
                                    if (!choice) return;
                                    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : void 0;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    choice.keyCode = passedKeyCode;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                                        choice
                                    });
                                    if (!choice.selected && !choice.disabled) {
                                        var canAddItem = this._canAddItem(activeItems, choice.value);
                                        if (canAddItem.response) {
                                            this._addItem({
                                                value: choice.value,
                                                label: choice.label,
                                                choiceId: choice.id,
                                                groupId: choice.groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder,
                                                keyCode: choice.keyCode
                                            });
                                            this._triggerChange(choice.value);
                                        }
                                    }
                                    this.clearInput();
                                    if (hasActiveDropdown && this._isSelectOneElement) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._handleBackspace = function(activeItems) {
                                    if (!this.config.removeItems || !activeItems) return;
                                    var lastItem = activeItems[activeItems.length - 1];
                                    var hasHighlightedItems = activeItems.some((function(item) {
                                        return item.highlighted;
                                    }));
                                    if (this.config.editItems && !hasHighlightedItems && lastItem) {
                                        this.input.value = lastItem.value;
                                        this.input.setWidth();
                                        this._removeItem(lastItem);
                                        this._triggerChange(lastItem.value);
                                    } else {
                                        if (!hasHighlightedItems) this.highlightItem(lastItem, false);
                                        this.removeHighlightedItems(true);
                                    }
                                };
                                Choices.prototype._startLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(true));
                                };
                                Choices.prototype._stopLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(false));
                                };
                                Choices.prototype._handleLoadingState = function(setLoading) {
                                    if (setLoading === void 0) setLoading = true;
                                    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                                    if (setLoading) {
                                        this.disable();
                                        this.containerOuter.addLoadingState();
                                        if (this._isSelectOneElement) if (!placeholderItem) {
                                            placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                                            if (placeholderItem) this.itemList.append(placeholderItem);
                                        } else placeholderItem.innerHTML = this.config.loadingText; else this.input.placeholder = this.config.loadingText;
                                    } else {
                                        this.enable();
                                        this.containerOuter.removeLoadingState();
                                        if (this._isSelectOneElement) {
                                            if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
                                        } else this.input.placeholder = this._placeholderValue || "";
                                    }
                                };
                                Choices.prototype._handleSearch = function(value) {
                                    if (!this.input.isFocussed) return;
                                    var choices = this._store.choices;
                                    var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                                    var hasUnactiveChoices = choices.some((function(option) {
                                        return !option.active;
                                    }));
                                    if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                                        var resultCount = searchChoices ? this._searchChoices(value) : 0;
                                        this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                            value,
                                            resultCount
                                        });
                                    } else if (hasUnactiveChoices) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                };
                                Choices.prototype._canAddItem = function(activeItems, value) {
                                    var canAddItem = true;
                                    var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                                    if (!this._isSelectOneElement) {
                                        var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                                        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                            canAddItem = false;
                                            notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                                        }
                                        if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                            canAddItem = false;
                                            notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                                        }
                                        if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                                            canAddItem = false;
                                            notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                                        }
                                    }
                                    return {
                                        response: canAddItem,
                                        notice
                                    };
                                };
                                Choices.prototype._searchChoices = function(value) {
                                    var newValue = typeof value === "string" ? value.trim() : value;
                                    var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                                    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) return 0;
                                    var haystack = this._store.searchableChoices;
                                    var needle = newValue;
                                    var options = Object.assign(this.config.fuseOptions, {
                                        keys: __spreadArray([], this.config.searchFields, true),
                                        includeMatches: true
                                    });
                                    var fuse = new fuse_js_1.default(haystack, options);
                                    var results = fuse.search(needle);
                                    this._currentValue = newValue;
                                    this._highlightPosition = 0;
                                    this._isSearching = true;
                                    this._store.dispatch((0, choices_1.filterChoices)(results));
                                    return results.length;
                                };
                                Choices.prototype._addEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.addEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.addEventListener("click", this._onClick, {
                                        passive: true
                                    });
                                    documentElement.addEventListener("touchmove", this._onTouchMove, {
                                        passive: true
                                    });
                                    this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                                        passive: true
                                    });
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                            passive: true
                                        });
                                        this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                            passive: true
                                        });
                                    }
                                    this.input.element.addEventListener("keyup", this._onKeyUp, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                    if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
                                        passive: true
                                    });
                                    this.input.addEventListeners();
                                };
                                Choices.prototype._removeEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.removeEventListener("click", this._onClick);
                                    documentElement.removeEventListener("touchmove", this._onTouchMove);
                                    this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.removeEventListener("focus", this._onFocus);
                                        this.containerOuter.element.removeEventListener("blur", this._onBlur);
                                    }
                                    this.input.element.removeEventListener("keyup", this._onKeyUp);
                                    this.input.element.removeEventListener("focus", this._onFocus);
                                    this.input.element.removeEventListener("blur", this._onBlur);
                                    if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
                                    this.input.removeEventListeners();
                                };
                                Choices.prototype._onKeyDown = function(event) {
                                    var keyCode = event.keyCode;
                                    var activeItems = this._store.activeItems;
                                    var hasFocusedInput = this.input.isFocussed;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    var hasItems = this.itemList.hasChildren();
                                    var keyString = String.fromCharCode(keyCode);
                                    var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
                                    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
                                        this.showDropdown();
                                        if (!this.input.isFocussed) this.input.value += event.key.toLowerCase();
                                    }
                                    switch (keyCode) {
                                      case A_KEY:
                                        return this._onSelectKey(event, hasItems);

                                      case ENTER_KEY:
                                        return this._onEnterKey(event, activeItems, hasActiveDropdown);

                                      case ESC_KEY:
                                        return this._onEscapeKey(hasActiveDropdown);

                                      case UP_KEY:
                                      case PAGE_UP_KEY:
                                      case DOWN_KEY:
                                      case PAGE_DOWN_KEY:
                                        return this._onDirectionKey(event, hasActiveDropdown);

                                      case DELETE_KEY:
                                      case BACK_KEY:
                                        return this._onDeleteKey(event, activeItems, hasFocusedInput);

                                      default:
                                    }
                                };
                                Choices.prototype._onKeyUp = function(_a) {
                                    var target = _a.target, keyCode = _a.keyCode;
                                    var value = this.input.value;
                                    var activeItems = this._store.activeItems;
                                    var canAddItem = this._canAddItem(activeItems, value);
                                    var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                                    if (this._isTextElement) {
                                        var canShowDropdownNotice = canAddItem.notice && value;
                                        if (canShowDropdownNotice) {
                                            var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                                            this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                            this.showDropdown(true);
                                        } else this.hideDropdown(true);
                                    } else {
                                        var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                                        var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                                        var canReactivateChoices = !this._isTextElement && this._isSearching;
                                        var canSearch = this._canSearch && canAddItem.response;
                                        if (userHasRemovedValue && canReactivateChoices) {
                                            this._isSearching = false;
                                            this._store.dispatch((0, choices_1.activateChoices)(true));
                                        } else if (canSearch) this._handleSearch(this.input.rawValue);
                                    }
                                    this._canSearch = this.config.searchEnabled;
                                };
                                Choices.prototype._onSelectKey = function(event, hasItems) {
                                    var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                                    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                                    if (hasCtrlDownKeyPressed && hasItems) {
                                        this._canSearch = false;
                                        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                                        if (shouldHightlightAll) this.highlightAll();
                                    }
                                };
                                Choices.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                                    var target = event.target;
                                    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                                    var targetWasButton = target && target.hasAttribute("data-button");
                                    if (this._isTextElement && target && target.value) {
                                        var value = this.input.value;
                                        var canAddItem = this._canAddItem(activeItems, value);
                                        if (canAddItem.response) {
                                            this.hideDropdown(true);
                                            this._addItem({
                                                value
                                            });
                                            this._triggerChange(value);
                                            this.clearInput();
                                        }
                                    }
                                    if (targetWasButton) {
                                        this._handleButtonAction(activeItems, target);
                                        event.preventDefault();
                                    }
                                    if (hasActiveDropdown) {
                                        var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                        if (highlightedChoice) {
                                            if (activeItems[0]) activeItems[0].keyCode = enterKey;
                                            this._handleChoiceAction(activeItems, highlightedChoice);
                                        }
                                        event.preventDefault();
                                    } else if (this._isSelectOneElement) {
                                        this.showDropdown();
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onEscapeKey = function(hasActiveDropdown) {
                                    if (hasActiveDropdown) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                                    var keyCode = event.keyCode, metaKey = event.metaKey;
                                    var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (hasActiveDropdown || this._isSelectOneElement) {
                                        this.showDropdown();
                                        this._canSearch = false;
                                        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                                        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                                        var selectableChoiceIdentifier = "[data-choice-selectable]";
                                        var nextEl = void 0;
                                        if (skipKey) if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type")); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier); else {
                                            var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                            if (currentEl) nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                        }
                                        if (nextEl) {
                                            if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                                            this._highlightChoice(nextEl);
                                        }
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                                    var target = event.target;
                                    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                                        this._handleBackspace(activeItems);
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onTouchMove = function() {
                                    if (this._wasTap) this._wasTap = false;
                                };
                                Choices.prototype._onTouchEnd = function(event) {
                                    var target = (event || event.touches[0]).target;
                                    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                                    if (touchWasWithinContainer) {
                                        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                                        if (containerWasExactTarget) if (this._isTextElement) this.input.focus(); else if (this._isSelectMultipleElement) this.showDropdown();
                                        event.stopPropagation();
                                    }
                                    this._wasTap = true;
                                };
                                Choices.prototype._onMouseDown = function(event) {
                                    var target = event.target;
                                    if (!(target instanceof HTMLElement)) return;
                                    if (IS_IE11 && this.choiceList.element.contains(target)) {
                                        var firstChoice = this.choiceList.element.firstElementChild;
                                        var isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                                        this._isScrollingOnIe = isOnScrollbar;
                                    }
                                    if (target === this.input.element) return;
                                    var item = target.closest("[data-button],[data-item],[data-choice]");
                                    if (item instanceof HTMLElement) {
                                        var hasShiftKey = event.shiftKey;
                                        var activeItems = this._store.activeItems;
                                        var dataset = item.dataset;
                                        if ("button" in dataset) this._handleButtonAction(activeItems, item); else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey); else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
                                    }
                                    event.preventDefault();
                                };
                                Choices.prototype._onMouseOver = function(_a) {
                                    var target = _a.target;
                                    if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
                                };
                                Choices.prototype._onClick = function(_a) {
                                    var target = _a.target;
                                    var clickWasWithinContainer = this.containerOuter.element.contains(target);
                                    if (clickWasWithinContainer) {
                                        if (!this.dropdown.isActive && !this.containerOuter.isDisabled) if (this._isTextElement) {
                                            if (document.activeElement !== this.input.element) this.input.focus();
                                        } else {
                                            this.showDropdown();
                                            this.containerOuter.focus();
                                        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                                    } else {
                                        var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                                        if (hasHighlightedItems) this.unhighlightAll();
                                        this.containerOuter.removeFocusState();
                                        this.hideDropdown(true);
                                    }
                                };
                                Choices.prototype._onFocus = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (!focusWasWithinContainer) return;
                                    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                        if (target === _this.input.element) _this.containerOuter.addFocusState();
                                    }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                        _this.containerOuter.addFocusState();
                                        if (target === _this.input.element) _this.showDropdown(true);
                                    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                        if (target === _this.input.element) {
                                            _this.showDropdown(true);
                                            _this.containerOuter.addFocusState();
                                        }
                                    }, _b);
                                    focusActions[this.passedElement.element.type]();
                                };
                                Choices.prototype._onBlur = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (blurWasWithinContainer && !this._isScrollingOnIe) {
                                        var activeItems = this._store.activeItems;
                                        var hasHighlightedItems_1 = activeItems.some((function(item) {
                                            return item.highlighted;
                                        }));
                                        var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                                _this.hideDropdown(true);
                                            }
                                        }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                            _this.containerOuter.removeFocusState();
                                            if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) _this.hideDropdown(true);
                                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                _this.hideDropdown(true);
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                            }
                                        }, _b);
                                        blurActions[this.passedElement.element.type]();
                                    } else {
                                        this._isScrollingOnIe = false;
                                        this.input.element.focus();
                                    }
                                };
                                Choices.prototype._onFormReset = function() {
                                    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                                };
                                Choices.prototype._highlightChoice = function(el) {
                                    var _this = this;
                                    if (el === void 0) el = null;
                                    var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                                    if (!choices.length) return;
                                    var passedEl = el;
                                    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                                    highlightedChoices.forEach((function(choice) {
                                        choice.classList.remove(_this.config.classNames.highlightedState);
                                        choice.setAttribute("aria-selected", "false");
                                    }));
                                    if (passedEl) this._highlightPosition = choices.indexOf(passedEl); else {
                                        if (choices.length > this._highlightPosition) passedEl = choices[this._highlightPosition]; else passedEl = choices[choices.length - 1];
                                        if (!passedEl) passedEl = choices[0];
                                    }
                                    passedEl.classList.add(this.config.classNames.highlightedState);
                                    passedEl.setAttribute("aria-selected", "true");
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                                        el: passedEl
                                    });
                                    if (this.dropdown.isActive) {
                                        this.input.setActiveDescendant(passedEl.id);
                                        this.containerOuter.setActiveDescendant(passedEl.id);
                                    }
                                };
                                Choices.prototype._addItem = function(_a) {
                                    var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                                    var passedValue = typeof value === "string" ? value.trim() : value;
                                    var items = this._store.items;
                                    var passedLabel = label || passedValue;
                                    var passedOptionId = choiceId || -1;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    var id = items ? items.length + 1 : 1;
                                    if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                                    if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                                    this._store.dispatch((0, items_1.addItem)({
                                        value: passedValue,
                                        label: passedLabel,
                                        id,
                                        choiceId: passedOptionId,
                                        groupId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (this._isSelectOneElement) this.removeActiveItems(id);
                                    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                                        id,
                                        value: passedValue,
                                        label: passedLabel,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null,
                                        keyCode
                                    });
                                };
                                Choices.prototype._removeItem = function(item) {
                                    var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                                    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    if (!id || !choiceId) return;
                                    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                                        id,
                                        value,
                                        label,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                };
                                Choices.prototype._addChoice = function(_a) {
                                    var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                                    if (typeof value === "undefined" || value === null) return;
                                    var choices = this._store.choices;
                                    var choiceLabel = label || value;
                                    var choiceId = choices ? choices.length + 1 : 1;
                                    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                                    this._store.dispatch((0, choices_1.addChoice)({
                                        id: choiceId,
                                        groupId,
                                        elementId: choiceElementId,
                                        value,
                                        label: choiceLabel,
                                        disabled: isDisabled,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (isSelected) this._addItem({
                                        value,
                                        label: choiceLabel,
                                        choiceId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    });
                                };
                                Choices.prototype._addGroup = function(_a) {
                                    var _this = this;
                                    var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                                    var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                                    var groupId = id || Math.floor((new Date).valueOf() * Math.random());
                                    var isDisabled = group.disabled ? group.disabled : false;
                                    if (groupChoices) {
                                        this._store.dispatch((0, groups_1.addGroup)({
                                            value: group.label,
                                            id: groupId,
                                            active: true,
                                            disabled: isDisabled
                                        }));
                                        var addGroupChoices = function(choice) {
                                            var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                            _this._addChoice({
                                                value: choice[valueKey],
                                                label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                                                isSelected: choice.selected,
                                                isDisabled: isOptDisabled,
                                                groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder
                                            });
                                        };
                                        groupChoices.forEach(addGroupChoices);
                                    } else this._store.dispatch((0, groups_1.addGroup)({
                                        value: group.label,
                                        id: group.id,
                                        active: false,
                                        disabled: group.disabled
                                    }));
                                };
                                Choices.prototype._getTemplate = function(template) {
                                    var _a;
                                    var args = [];
                                    for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                                    return (_a = this._templates[template]).call.apply(_a, __spreadArray([ this, this.config ], args, false));
                                };
                                Choices.prototype._createTemplates = function() {
                                    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                                    var userTemplates = {};
                                    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                                    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                                };
                                Choices.prototype._createElements = function() {
                                    this.containerOuter = new components_1.Container({
                                        element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.containerInner = new components_1.Container({
                                        element: this._getTemplate("containerInner"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.input = new components_1.Input({
                                        element: this._getTemplate("input", this._placeholderValue),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        preventPaste: !this.config.paste
                                    });
                                    this.choiceList = new components_1.List({
                                        element: this._getTemplate("choiceList", this._isSelectOneElement)
                                    });
                                    this.itemList = new components_1.List({
                                        element: this._getTemplate("itemList", this._isSelectOneElement)
                                    });
                                    this.dropdown = new components_1.Dropdown({
                                        element: this._getTemplate("dropdown"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type
                                    });
                                };
                                Choices.prototype._createStructure = function() {
                                    this.passedElement.conceal();
                                    this.containerInner.wrap(this.passedElement.element);
                                    this.containerOuter.wrap(this.containerInner.element);
                                    if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || ""; else if (this._placeholderValue) {
                                        this.input.placeholder = this._placeholderValue;
                                        this.input.setWidth();
                                    }
                                    this.containerOuter.element.appendChild(this.containerInner.element);
                                    this.containerOuter.element.appendChild(this.dropdown.element);
                                    this.containerInner.element.appendChild(this.itemList.element);
                                    if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                                    if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element); else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                                    if (this._isSelectElement) {
                                        this._highlightPosition = 0;
                                        this._isSearching = false;
                                        this._startLoading();
                                        if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups); else this._addPredefinedChoices(this._presetChoices);
                                        this._stopLoading();
                                    }
                                    if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                                };
                                Choices.prototype._addPredefinedGroups = function(groups) {
                                    var _this = this;
                                    var placeholderChoice = this.passedElement.placeholderOption;
                                    if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") this._addChoice({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.innerHTML,
                                        isSelected: placeholderChoice.selected,
                                        isDisabled: placeholderChoice.disabled,
                                        placeholder: true
                                    });
                                    groups.forEach((function(group) {
                                        return _this._addGroup({
                                            group,
                                            id: group.id || null
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedChoices = function(choices) {
                                    var _this = this;
                                    if (this.config.shouldSort) choices.sort(this.config.sorter);
                                    var hasSelectedChoice = choices.some((function(choice) {
                                        return choice.selected;
                                    }));
                                    var firstEnabledChoiceIndex = choices.findIndex((function(choice) {
                                        return choice.disabled === void 0 || !choice.disabled;
                                    }));
                                    choices.forEach((function(choice, index) {
                                        var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                                        if (_this._isSelectElement) if (choice.choices) _this._addGroup({
                                            group: choice,
                                            id: choice.id || null
                                        }); else {
                                            var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                            var isSelected = shouldPreselect ? true : choice.selected;
                                            var isDisabled = choice.disabled;
                                            _this._addChoice({
                                                value,
                                                label,
                                                isSelected: !!isSelected,
                                                isDisabled: !!isDisabled,
                                                placeholder: !!placeholder,
                                                customProperties
                                            });
                                        } else _this._addChoice({
                                            value,
                                            label,
                                            isSelected: !!choice.selected,
                                            isDisabled: !!choice.disabled,
                                            placeholder: !!choice.placeholder,
                                            customProperties
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedItems = function(items) {
                                    var _this = this;
                                    items.forEach((function(item) {
                                        if (typeof item === "object" && item.value) _this._addItem({
                                            value: item.value,
                                            label: item.label,
                                            choiceId: item.id,
                                            customProperties: item.customProperties,
                                            placeholder: item.placeholder
                                        });
                                        if (typeof item === "string") _this._addItem({
                                            value: item
                                        });
                                    }));
                                };
                                Choices.prototype._setChoiceOrItem = function(item) {
                                    var _this = this;
                                    var itemType = (0, utils_1.getType)(item).toLowerCase();
                                    var handleType = {
                                        object: function() {
                                            if (!item.value) return;
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item.value,
                                                label: item.label,
                                                isSelected: true,
                                                isDisabled: false,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            }); else _this._addItem({
                                                value: item.value,
                                                label: item.label,
                                                choiceId: item.id,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            });
                                        },
                                        string: function() {
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item,
                                                label: item,
                                                isSelected: true,
                                                isDisabled: false
                                            }); else _this._addItem({
                                                value: item
                                            });
                                        }
                                    };
                                    handleType[itemType]();
                                };
                                Choices.prototype._findAndSelectChoiceByValue = function(value) {
                                    var _this = this;
                                    var choices = this._store.choices;
                                    var foundChoice = choices.find((function(choice) {
                                        return _this.config.valueComparer(choice.value, value);
                                    }));
                                    if (foundChoice && !foundChoice.selected) this._addItem({
                                        value: foundChoice.value,
                                        label: foundChoice.label,
                                        choiceId: foundChoice.id,
                                        groupId: foundChoice.groupId,
                                        customProperties: foundChoice.customProperties,
                                        placeholder: foundChoice.placeholder,
                                        keyCode: foundChoice.keyCode
                                    });
                                };
                                Choices.prototype._generatePlaceholderValue = function() {
                                    if (this._isSelectElement && this.passedElement.placeholderOption) {
                                        var placeholderOption = this.passedElement.placeholderOption;
                                        return placeholderOption ? placeholderOption.text : null;
                                    }
                                    var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                                    var dataset = this.passedElement.element.dataset;
                                    if (placeholder) {
                                        if (placeholderValue) return placeholderValue;
                                        if (dataset.placeholder) return dataset.placeholder;
                                    }
                                    return null;
                                };
                                return Choices;
                            }();
                            exports["default"] = Choices;
                        },
                        613: function(__unused_webpack_module, exports, __nested_webpack_require_74916__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_74916__(799);
                            var constants_1 = __nested_webpack_require_74916__(883);
                            var Container = function() {
                                function Container(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.position = position;
                                    this.isOpen = false;
                                    this.isFlipped = false;
                                    this.isFocussed = false;
                                    this.isDisabled = false;
                                    this.isLoading = false;
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Container.prototype.addEventListeners = function() {
                                    this.element.addEventListener("focus", this._onFocus);
                                    this.element.addEventListener("blur", this._onBlur);
                                };
                                Container.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Container.prototype.shouldFlip = function(dropdownPos) {
                                    if (typeof dropdownPos !== "number") return false;
                                    var shouldFlip = false;
                                    if (this.position === "auto") shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches; else if (this.position === "top") shouldFlip = true;
                                    return shouldFlip;
                                };
                                Container.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Container.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Container.prototype.open = function(dropdownPos) {
                                    this.element.classList.add(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isOpen = true;
                                    if (this.shouldFlip(dropdownPos)) {
                                        this.element.classList.add(this.classNames.flippedState);
                                        this.isFlipped = true;
                                    }
                                };
                                Container.prototype.close = function() {
                                    this.element.classList.remove(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.removeActiveDescendant();
                                    this.isOpen = false;
                                    if (this.isFlipped) {
                                        this.element.classList.remove(this.classNames.flippedState);
                                        this.isFlipped = false;
                                    }
                                };
                                Container.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Container.prototype.addFocusState = function() {
                                    this.element.classList.add(this.classNames.focusState);
                                };
                                Container.prototype.removeFocusState = function() {
                                    this.element.classList.remove(this.classNames.focusState);
                                };
                                Container.prototype.enable = function() {
                                    this.element.classList.remove(this.classNames.disabledState);
                                    this.element.removeAttribute("aria-disabled");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "0");
                                    this.isDisabled = false;
                                };
                                Container.prototype.disable = function() {
                                    this.element.classList.add(this.classNames.disabledState);
                                    this.element.setAttribute("aria-disabled", "true");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "-1");
                                    this.isDisabled = true;
                                };
                                Container.prototype.wrap = function(element) {
                                    (0, utils_1.wrap)(element, this.element);
                                };
                                Container.prototype.unwrap = function(element) {
                                    if (this.element.parentNode) {
                                        this.element.parentNode.insertBefore(element, this.element);
                                        this.element.parentNode.removeChild(this.element);
                                    }
                                };
                                Container.prototype.addLoadingState = function() {
                                    this.element.classList.add(this.classNames.loadingState);
                                    this.element.setAttribute("aria-busy", "true");
                                    this.isLoading = true;
                                };
                                Container.prototype.removeLoadingState = function() {
                                    this.element.classList.remove(this.classNames.loadingState);
                                    this.element.removeAttribute("aria-busy");
                                    this.isLoading = false;
                                };
                                Container.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Container.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Container;
                            }();
                            exports["default"] = Container;
                        },
                        217: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var Dropdown = function() {
                                function Dropdown(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.isActive = false;
                                }
                                Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                                    get: function() {
                                        return this.element.getBoundingClientRect().bottom;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Dropdown.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                Dropdown.prototype.show = function() {
                                    this.element.classList.add(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isActive = true;
                                    return this;
                                };
                                Dropdown.prototype.hide = function() {
                                    this.element.classList.remove(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.isActive = false;
                                    return this;
                                };
                                return Dropdown;
                            }();
                            exports["default"] = Dropdown;
                        },
                        520: function(__unused_webpack_module, exports, __nested_webpack_require_81090__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
                            var dropdown_1 = __importDefault(__nested_webpack_require_81090__(217));
                            exports.Dropdown = dropdown_1.default;
                            var container_1 = __importDefault(__nested_webpack_require_81090__(613));
                            exports.Container = container_1.default;
                            var input_1 = __importDefault(__nested_webpack_require_81090__(11));
                            exports.Input = input_1.default;
                            var list_1 = __importDefault(__nested_webpack_require_81090__(624));
                            exports.List = list_1.default;
                            var wrapped_input_1 = __importDefault(__nested_webpack_require_81090__(541));
                            exports.WrappedInput = wrapped_input_1.default;
                            var wrapped_select_1 = __importDefault(__nested_webpack_require_81090__(982));
                            exports.WrappedSelect = wrapped_select_1.default;
                        },
                        11: function(__unused_webpack_module, exports, __nested_webpack_require_82125__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_82125__(799);
                            var constants_1 = __nested_webpack_require_82125__(883);
                            var Input = function() {
                                function Input(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                                    this.element = element;
                                    this.type = type;
                                    this.classNames = classNames;
                                    this.preventPaste = preventPaste;
                                    this.isFocussed = this.element.isEqualNode(document.activeElement);
                                    this.isDisabled = element.disabled;
                                    this._onPaste = this._onPaste.bind(this);
                                    this._onInput = this._onInput.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Object.defineProperty(Input.prototype, "placeholder", {
                                    set: function(placeholder) {
                                        this.element.placeholder = placeholder;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "value", {
                                    get: function() {
                                        return (0, utils_1.sanitise)(this.element.value);
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "rawValue", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Input.prototype.addEventListeners = function() {
                                    this.element.addEventListener("paste", this._onPaste);
                                    this.element.addEventListener("input", this._onInput, {
                                        passive: true
                                    });
                                    this.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                };
                                Input.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("input", this._onInput);
                                    this.element.removeEventListener("paste", this._onPaste);
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Input.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.isDisabled = false;
                                };
                                Input.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.isDisabled = true;
                                };
                                Input.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Input.prototype.blur = function() {
                                    if (this.isFocussed) this.element.blur();
                                };
                                Input.prototype.clear = function(setWidth) {
                                    if (setWidth === void 0) setWidth = true;
                                    if (this.element.value) this.element.value = "";
                                    if (setWidth) this.setWidth();
                                    return this;
                                };
                                Input.prototype.setWidth = function() {
                                    var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                                    style.minWidth = "".concat(placeholder.length + 1, "ch");
                                    style.width = "".concat(value.length + 1, "ch");
                                };
                                Input.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Input.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Input.prototype._onInput = function() {
                                    if (this.type !== constants_1.SELECT_ONE_TYPE) this.setWidth();
                                };
                                Input.prototype._onPaste = function(event) {
                                    if (this.preventPaste) event.preventDefault();
                                };
                                Input.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Input.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Input;
                            }();
                            exports["default"] = Input;
                        },
                        624: function(__unused_webpack_module, exports, __nested_webpack_require_86127__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var constants_1 = __nested_webpack_require_86127__(883);
                            var List = function() {
                                function List(_a) {
                                    var element = _a.element;
                                    this.element = element;
                                    this.scrollPos = this.element.scrollTop;
                                    this.height = this.element.offsetHeight;
                                }
                                List.prototype.clear = function() {
                                    this.element.innerHTML = "";
                                };
                                List.prototype.append = function(node) {
                                    this.element.appendChild(node);
                                };
                                List.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                List.prototype.hasChildren = function() {
                                    return this.element.hasChildNodes();
                                };
                                List.prototype.scrollToTop = function() {
                                    this.element.scrollTop = 0;
                                };
                                List.prototype.scrollToChildElement = function(element, direction) {
                                    var _this = this;
                                    if (!element) return;
                                    var listHeight = this.element.offsetHeight;
                                    var listScrollPosition = this.element.scrollTop + listHeight;
                                    var elementHeight = element.offsetHeight;
                                    var elementPos = element.offsetTop + elementHeight;
                                    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                                    requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                List.prototype._scrollDown = function(scrollPos, strength, destination) {
                                    var easing = (destination - scrollPos) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos + distance;
                                };
                                List.prototype._scrollUp = function(scrollPos, strength, destination) {
                                    var easing = (scrollPos - destination) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos - distance;
                                };
                                List.prototype._animateScroll = function(destination, direction) {
                                    var _this = this;
                                    var strength = constants_1.SCROLLING_SPEED;
                                    var choiceListScrollTop = this.element.scrollTop;
                                    var continueAnimation = false;
                                    if (direction > 0) {
                                        this._scrollDown(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop < destination) continueAnimation = true;
                                    } else {
                                        this._scrollUp(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop > destination) continueAnimation = true;
                                    }
                                    if (continueAnimation) requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                return List;
                            }();
                            exports["default"] = List;
                        },
                        730: function(__unused_webpack_module, exports, __nested_webpack_require_88948__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_88948__(799);
                            var WrappedElement = function() {
                                function WrappedElement(_a) {
                                    var element = _a.element, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                                    this.isDisabled = false;
                                }
                                Object.defineProperty(WrappedElement.prototype, "isActive", {
                                    get: function() {
                                        return this.element.dataset.choice === "active";
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "dir", {
                                    get: function() {
                                        return this.element.dir;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedElement.prototype.conceal = function() {
                                    this.element.classList.add(this.classNames.input);
                                    this.element.hidden = true;
                                    this.element.tabIndex = -1;
                                    var origStyle = this.element.getAttribute("style");
                                    if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
                                    this.element.setAttribute("data-choice", "active");
                                };
                                WrappedElement.prototype.reveal = function() {
                                    this.element.classList.remove(this.classNames.input);
                                    this.element.hidden = false;
                                    this.element.removeAttribute("tabindex");
                                    var origStyle = this.element.getAttribute("data-choice-orig-style");
                                    if (origStyle) {
                                        this.element.removeAttribute("data-choice-orig-style");
                                        this.element.setAttribute("style", origStyle);
                                    } else this.element.removeAttribute("style");
                                    this.element.removeAttribute("data-choice");
                                    this.element.value = this.element.value;
                                };
                                WrappedElement.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.element.disabled = false;
                                    this.isDisabled = false;
                                };
                                WrappedElement.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.element.disabled = true;
                                    this.isDisabled = true;
                                };
                                WrappedElement.prototype.triggerEvent = function(eventType, data) {
                                    (0, utils_1.dispatchEvent)(this.element, eventType, data);
                                };
                                return WrappedElement;
                            }();
                            exports["default"] = WrappedElement;
                        },
                        541: function(__unused_webpack_module, exports, __nested_webpack_require_92021__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_92021__(730));
                            var WrappedInput = function(_super) {
                                __extends(WrappedInput, _super);
                                function WrappedInput(_a) {
                                    var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.delimiter = delimiter;
                                    return _this;
                                }
                                Object.defineProperty(WrappedInput.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.setAttribute("value", value);
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                return WrappedInput;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedInput;
                        },
                        982: function(__unused_webpack_module, exports, __nested_webpack_require_93875__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_93875__(730));
                            var WrappedSelect = function(_super) {
                                __extends(WrappedSelect, _super);
                                function WrappedSelect(_a) {
                                    var element = _a.element, classNames = _a.classNames, template = _a.template;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.template = template;
                                    return _this;
                                }
                                Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                                    get: function() {
                                        return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                                    get: function() {
                                        return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "options", {
                                    get: function() {
                                        return Array.from(this.element.options);
                                    },
                                    set: function(options) {
                                        var _this = this;
                                        var fragment = document.createDocumentFragment();
                                        var addOptionToFragment = function(data) {
                                            var option = _this.template(data);
                                            fragment.appendChild(option);
                                        };
                                        options.forEach((function(optionData) {
                                            return addOptionToFragment(optionData);
                                        }));
                                        this.appendDocFragment(fragment);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedSelect.prototype.appendDocFragment = function(fragment) {
                                    this.element.innerHTML = "";
                                    this.element.appendChild(fragment);
                                };
                                return WrappedSelect;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedSelect;
                        },
                        883: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                            exports.EVENTS = {
                                showDropdown: "showDropdown",
                                hideDropdown: "hideDropdown",
                                change: "change",
                                choice: "choice",
                                search: "search",
                                addItem: "addItem",
                                removeItem: "removeItem",
                                highlightItem: "highlightItem",
                                highlightChoice: "highlightChoice",
                                unhighlightItem: "unhighlightItem"
                            };
                            exports.ACTION_TYPES = {
                                ADD_CHOICE: "ADD_CHOICE",
                                FILTER_CHOICES: "FILTER_CHOICES",
                                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                                CLEAR_CHOICES: "CLEAR_CHOICES",
                                ADD_GROUP: "ADD_GROUP",
                                ADD_ITEM: "ADD_ITEM",
                                REMOVE_ITEM: "REMOVE_ITEM",
                                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                                CLEAR_ALL: "CLEAR_ALL",
                                RESET_TO: "RESET_TO",
                                SET_IS_LOADING: "SET_IS_LOADING"
                            };
                            exports.KEY_CODES = {
                                BACK_KEY: 46,
                                DELETE_KEY: 8,
                                ENTER_KEY: 13,
                                A_KEY: 65,
                                ESC_KEY: 27,
                                UP_KEY: 38,
                                DOWN_KEY: 40,
                                PAGE_UP_KEY: 33,
                                PAGE_DOWN_KEY: 34
                            };
                            exports.TEXT_TYPE = "text";
                            exports.SELECT_ONE_TYPE = "select-one";
                            exports.SELECT_MULTIPLE_TYPE = "select-multiple";
                            exports.SCROLLING_SPEED = 4;
                        },
                        789: function(__unused_webpack_module, exports, __nested_webpack_require_98200__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
                            var utils_1 = __nested_webpack_require_98200__(799);
                            exports.DEFAULT_CLASSNAMES = {
                                containerOuter: "choices",
                                containerInner: "choices__inner",
                                input: "choices__input",
                                inputCloned: "choices__input--cloned",
                                list: "choices__list",
                                listItems: "choices__list--multiple",
                                listSingle: "choices__list--single",
                                listDropdown: "choices__list--dropdown",
                                item: "choices__item",
                                itemSelectable: "choices__item--selectable",
                                itemDisabled: "choices__item--disabled",
                                itemChoice: "choices__item--choice",
                                placeholder: "choices__placeholder",
                                group: "choices__group",
                                groupHeading: "choices__heading",
                                button: "choices__button",
                                activeState: "is-active",
                                focusState: "is-focused",
                                openState: "is-open",
                                disabledState: "is-disabled",
                                highlightedState: "is-highlighted",
                                selectedState: "is-selected",
                                flippedState: "is-flipped",
                                loadingState: "is-loading",
                                noResults: "has-no-results",
                                noChoices: "has-no-choices"
                            };
                            exports.DEFAULT_CONFIG = {
                                items: [],
                                choices: [],
                                silent: false,
                                renderChoiceLimit: -1,
                                maxItemCount: -1,
                                addItems: true,
                                addItemFilter: null,
                                removeItems: true,
                                removeItemButton: false,
                                editItems: false,
                                allowHTML: true,
                                duplicateItemsAllowed: true,
                                delimiter: ",",
                                paste: true,
                                searchEnabled: true,
                                searchChoices: true,
                                searchFloor: 1,
                                searchResultLimit: 4,
                                searchFields: [ "label", "value" ],
                                position: "auto",
                                resetScrollPosition: true,
                                shouldSort: true,
                                shouldSortItems: false,
                                sorter: utils_1.sortByAlpha,
                                placeholder: true,
                                placeholderValue: null,
                                searchPlaceholderValue: null,
                                prependValue: null,
                                appendValue: null,
                                renderSelectedChoices: "auto",
                                loadingText: "Loading...",
                                noResultsText: "No results found",
                                noChoicesText: "No choices to choose from",
                                itemSelectText: "Press to select",
                                uniqueItemText: "Only unique values can be added",
                                customAddItemText: "Only values matching specific conditions can be added",
                                addItemText: function(value) {
                                    return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                                },
                                maxItemText: function(maxItemCount) {
                                    return "Only ".concat(maxItemCount, " values can be added");
                                },
                                valueComparer: function(value1, value2) {
                                    return value1 === value2;
                                },
                                fuseOptions: {
                                    includeScore: true
                                },
                                labelId: "",
                                callbackOnInit: null,
                                callbackOnCreateTemplates: null,
                                classNames: exports.DEFAULT_CLASSNAMES
                            };
                        },
                        18: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        978: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        948: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        359: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        285: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        533: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        187: function(__unused_webpack_module, exports, __nested_webpack_require_101824__) {
                            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                                if (k2 === void 0) k2 = k;
                                var desc = Object.getOwnPropertyDescriptor(m, k);
                                if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                                    enumerable: true,
                                    get: function() {
                                        return m[k];
                                    }
                                };
                                Object.defineProperty(o, k2, desc);
                            } : function(o, m, k, k2) {
                                if (k2 === void 0) k2 = k;
                                o[k2] = m[k];
                            });
                            var __exportStar = this && this.__exportStar || function(m, exports) {
                                for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            __exportStar(__nested_webpack_require_101824__(18), exports);
                            __exportStar(__nested_webpack_require_101824__(978), exports);
                            __exportStar(__nested_webpack_require_101824__(948), exports);
                            __exportStar(__nested_webpack_require_101824__(359), exports);
                            __exportStar(__nested_webpack_require_101824__(285), exports);
                            __exportStar(__nested_webpack_require_101824__(533), exports);
                            __exportStar(__nested_webpack_require_101824__(287), exports);
                            __exportStar(__nested_webpack_require_101824__(132), exports);
                            __exportStar(__nested_webpack_require_101824__(837), exports);
                            __exportStar(__nested_webpack_require_101824__(598), exports);
                            __exportStar(__nested_webpack_require_101824__(369), exports);
                            __exportStar(__nested_webpack_require_101824__(37), exports);
                            __exportStar(__nested_webpack_require_101824__(47), exports);
                            __exportStar(__nested_webpack_require_101824__(923), exports);
                            __exportStar(__nested_webpack_require_101824__(876), exports);
                        },
                        287: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        132: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        837: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        598: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        37: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        369: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        47: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        923: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        876: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        799: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
                            var getRandomNumber = function(min, max) {
                                return Math.floor(Math.random() * (max - min) + min);
                            };
                            exports.getRandomNumber = getRandomNumber;
                            var generateChars = function(length) {
                                return Array.from({
                                    length
                                }, (function() {
                                    return (0, exports.getRandomNumber)(0, 36).toString(36);
                                })).join("");
                            };
                            exports.generateChars = generateChars;
                            var generateId = function(element, prefix) {
                                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, 
                                exports.generateChars)(4);
                                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                                id = "".concat(prefix, "-").concat(id);
                                return id;
                            };
                            exports.generateId = generateId;
                            var getType = function(obj) {
                                return Object.prototype.toString.call(obj).slice(8, -1);
                            };
                            exports.getType = getType;
                            var isType = function(type, obj) {
                                return obj !== void 0 && obj !== null && (0, exports.getType)(obj) === type;
                            };
                            exports.isType = isType;
                            var wrap = function(element, wrapper) {
                                if (wrapper === void 0) wrapper = document.createElement("div");
                                if (element.parentNode) if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling); else element.parentNode.appendChild(wrapper);
                                return wrapper.appendChild(element);
                            };
                            exports.wrap = wrap;
                            var getAdjacentEl = function(startEl, selector, direction) {
                                if (direction === void 0) direction = 1;
                                var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                                var sibling = startEl[prop];
                                while (sibling) {
                                    if (sibling.matches(selector)) return sibling;
                                    sibling = sibling[prop];
                                }
                                return sibling;
                            };
                            exports.getAdjacentEl = getAdjacentEl;
                            var isScrolledIntoView = function(element, parent, direction) {
                                if (direction === void 0) direction = 1;
                                if (!element) return false;
                                var isVisible;
                                if (direction > 0) isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight; else isVisible = element.offsetTop >= parent.scrollTop;
                                return isVisible;
                            };
                            exports.isScrolledIntoView = isScrolledIntoView;
                            var sanitise = function(value) {
                                if (typeof value !== "string") return value;
                                return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                            };
                            exports.sanitise = sanitise;
                            exports.strToEl = function() {
                                var tmpEl = document.createElement("div");
                                return function(str) {
                                    var cleanedInput = str.trim();
                                    tmpEl.innerHTML = cleanedInput;
                                    var firldChild = tmpEl.children[0];
                                    while (tmpEl.firstChild) tmpEl.removeChild(tmpEl.firstChild);
                                    return firldChild;
                                };
                            }();
                            var sortByAlpha = function(_a, _b) {
                                var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                                var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                                return label.localeCompare(label2, [], {
                                    sensitivity: "base",
                                    ignorePunctuation: true,
                                    numeric: true
                                });
                            };
                            exports.sortByAlpha = sortByAlpha;
                            var sortByScore = function(a, b) {
                                var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                                var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                                return scoreA - scoreB;
                            };
                            exports.sortByScore = sortByScore;
                            var dispatchEvent = function(element, type, customArgs) {
                                if (customArgs === void 0) customArgs = null;
                                var event = new CustomEvent(type, {
                                    detail: customArgs,
                                    bubbles: true,
                                    cancelable: true
                                });
                                return element.dispatchEvent(event);
                            };
                            exports.dispatchEvent = dispatchEvent;
                            var existsInArray = function(array, value, key) {
                                if (key === void 0) key = "value";
                                return array.some((function(item) {
                                    if (typeof value === "string") return item[key] === value.trim();
                                    return item[key] === value;
                                }));
                            };
                            exports.existsInArray = existsInArray;
                            var cloneObject = function(obj) {
                                return JSON.parse(JSON.stringify(obj));
                            };
                            exports.cloneObject = cloneObject;
                            var diff = function(a, b) {
                                var aKeys = Object.keys(a).sort();
                                var bKeys = Object.keys(b).sort();
                                return aKeys.filter((function(i) {
                                    return bKeys.indexOf(i) < 0;
                                }));
                            };
                            exports.diff = diff;
                            var parseCustomProperties = function(customProperties) {
                                if (typeof customProperties !== "undefined") try {
                                    return JSON.parse(customProperties);
                                } catch (e) {
                                    return customProperties;
                                }
                                return {};
                            };
                            exports.parseCustomProperties = parseCustomProperties;
                        },
                        273: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function choices(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_CHOICE":
                                    var addChoiceAction = action;
                                    var choice = {
                                        id: addChoiceAction.id,
                                        elementId: addChoiceAction.elementId,
                                        groupId: addChoiceAction.groupId,
                                        value: addChoiceAction.value,
                                        label: addChoiceAction.label || addChoiceAction.value,
                                        disabled: addChoiceAction.disabled || false,
                                        selected: false,
                                        active: true,
                                        score: 9999,
                                        customProperties: addChoiceAction.customProperties,
                                        placeholder: addChoiceAction.placeholder || false
                                    };
                                    return __spreadArray(__spreadArray([], state, true), [ choice ], false);

                                  case "ADD_ITEM":
                                    var addItemAction_1 = action;
                                    if (addItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) choice.selected = true;
                                        return choice;
                                    }));
                                    return state;

                                  case "REMOVE_ITEM":
                                    var removeItemAction_1 = action;
                                    if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) choice.selected = false;
                                        return choice;
                                    }));
                                    return state;

                                  case "FILTER_CHOICES":
                                    var filterChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = filterChoicesAction_1.results.some((function(_a) {
                                            var item = _a.item, score = _a.score;
                                            if (item.id === choice.id) {
                                                choice.score = score;
                                                return true;
                                            }
                                            return false;
                                        }));
                                        return choice;
                                    }));

                                  case "ACTIVATE_CHOICES":
                                    var activateChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = activateChoicesAction_1.active;
                                        return choice;
                                    }));

                                  case "CLEAR_CHOICES":
                                    return exports.defaultState;

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = choices;
                        },
                        871: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function groups(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_GROUP":
                                    var addGroupAction = action;
                                    return __spreadArray(__spreadArray([], state, true), [ {
                                        id: addGroupAction.id,
                                        value: addGroupAction.value,
                                        active: addGroupAction.active,
                                        disabled: addGroupAction.disabled
                                    } ], false);

                                  case "CLEAR_CHOICES":
                                    return [];

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = groups;
                        },
                        655: function(__unused_webpack_module, exports, __nested_webpack_require_114916__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            var redux_1 = __nested_webpack_require_114916__(791);
                            var items_1 = __importDefault(__nested_webpack_require_114916__(52));
                            var groups_1 = __importDefault(__nested_webpack_require_114916__(871));
                            var choices_1 = __importDefault(__nested_webpack_require_114916__(273));
                            var loading_1 = __importDefault(__nested_webpack_require_114916__(502));
                            var utils_1 = __nested_webpack_require_114916__(799);
                            exports.defaultState = {
                                groups: [],
                                items: [],
                                choices: [],
                                loading: false
                            };
                            var appReducer = (0, redux_1.combineReducers)({
                                items: items_1.default,
                                groups: groups_1.default,
                                choices: choices_1.default,
                                loading: loading_1.default
                            });
                            var rootReducer = function(passedState, action) {
                                var state = passedState;
                                if (action.type === "CLEAR_ALL") state = exports.defaultState; else if (action.type === "RESET_TO") return (0, 
                                utils_1.cloneObject)(action.state);
                                return appReducer(state, action);
                            };
                            exports["default"] = rootReducer;
                        },
                        52: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function items(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_ITEM":
                                    var addItemAction = action;
                                    var newState = __spreadArray(__spreadArray([], state, true), [ {
                                        id: addItemAction.id,
                                        choiceId: addItemAction.choiceId,
                                        groupId: addItemAction.groupId,
                                        value: addItemAction.value,
                                        label: addItemAction.label,
                                        active: true,
                                        highlighted: false,
                                        customProperties: addItemAction.customProperties,
                                        placeholder: addItemAction.placeholder || false,
                                        keyCode: null
                                    } ], false);
                                    return newState.map((function(obj) {
                                        var item = obj;
                                        item.highlighted = false;
                                        return item;
                                    }));

                                  case "REMOVE_ITEM":
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === action.id) item.active = false;
                                        return item;
                                    }));

                                  case "HIGHLIGHT_ITEM":
                                    var highlightItemAction_1 = action;
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === highlightItemAction_1.id) item.highlighted = highlightItemAction_1.highlighted;
                                        return item;
                                    }));

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = items;
                        },
                        502: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = false;
                            var general = function(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "SET_IS_LOADING":
                                    return action.isLoading;

                                  default:
                                    return state;
                                }
                            };
                            exports["default"] = general;
                        },
                        744: function(__unused_webpack_module, exports, __nested_webpack_require_119022__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var redux_1 = __nested_webpack_require_119022__(791);
                            var index_1 = __importDefault(__nested_webpack_require_119022__(655));
                            var Store = function() {
                                function Store() {
                                    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                                }
                                Store.prototype.subscribe = function(onChange) {
                                    this._store.subscribe(onChange);
                                };
                                Store.prototype.dispatch = function(action) {
                                    this._store.dispatch(action);
                                };
                                Object.defineProperty(Store.prototype, "state", {
                                    get: function() {
                                        return this._store.getState();
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "items", {
                                    get: function() {
                                        return this.state.items;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active && item.highlighted;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "choices", {
                                    get: function() {
                                        return this.state.choices;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return choice.active === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "selectableChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return choice.disabled !== true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "searchableChoices", {
                                    get: function() {
                                        return this.selectableChoices.filter((function(choice) {
                                            return choice.placeholder !== true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "placeholderChoice", {
                                    get: function() {
                                        return __spreadArray([], this.choices, true).reverse().find((function(choice) {
                                            return choice.placeholder === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "groups", {
                                    get: function() {
                                        return this.state.groups;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeGroups", {
                                    get: function() {
                                        var _a = this, groups = _a.groups, choices = _a.choices;
                                        return groups.filter((function(group) {
                                            var isActive = group.active === true && group.disabled === false;
                                            var hasActiveOptions = choices.some((function(choice) {
                                                return choice.active === true && choice.disabled === false;
                                            }));
                                            return isActive && hasActiveOptions;
                                        }), []);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Store.prototype.isLoading = function() {
                                    return this.state.loading;
                                };
                                Store.prototype.getChoiceById = function(id) {
                                    return this.activeChoices.find((function(choice) {
                                        return choice.id === parseInt(id, 10);
                                    }));
                                };
                                Store.prototype.getGroupById = function(id) {
                                    return this.groups.find((function(group) {
                                        return group.id === id;
                                    }));
                                };
                                return Store;
                            }();
                            exports["default"] = Store;
                        },
                        686: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var templates = {
                                containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                                    var containerOuter = _a.classNames.containerOuter;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: containerOuter
                                    });
                                    div.dataset.type = passedElementType;
                                    if (dir) div.dir = dir;
                                    if (isSelectOneElement) div.tabIndex = 0;
                                    if (isSelectElement) {
                                        div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                                        if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
                                    }
                                    div.setAttribute("aria-haspopup", "true");
                                    div.setAttribute("aria-expanded", "false");
                                    if (labelId) div.setAttribute("aria-labelledby", labelId);
                                    return div;
                                },
                                containerInner: function(_a) {
                                    var containerInner = _a.classNames.containerInner;
                                    return Object.assign(document.createElement("div"), {
                                        className: containerInner
                                    });
                                },
                                itemList: function(_a, isSelectOneElement) {
                                    var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                                    return Object.assign(document.createElement("div"), {
                                        className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                                    });
                                },
                                placeholder: function(_a, value) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                                    return Object.assign(document.createElement("div"), (_b = {
                                        className: placeholder
                                    }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                                },
                                item: function(_a, _b, removeItemButton) {
                                    var _c, _d;
                                    var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        className: item
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                                    Object.assign(div.dataset, {
                                        item: "",
                                        id,
                                        value,
                                        customProperties
                                    });
                                    if (active) div.setAttribute("aria-selected", "true");
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.classList.add(highlighted ? highlightedState : itemSelectable);
                                    if (removeItemButton) {
                                        if (disabled) div.classList.remove(itemSelectable);
                                        div.dataset.deletable = "";
                                        var REMOVE_ITEM_TEXT = "Remove item";
                                        var removeButton = Object.assign(document.createElement("button"), (_d = {
                                            type: "button",
                                            className: button
                                        }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                                        removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                                        removeButton.dataset.button = "";
                                        div.appendChild(removeButton);
                                    }
                                    return div;
                                },
                                choiceList: function(_a, isSelectOneElement) {
                                    var list = _a.classNames.list;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: list
                                    });
                                    if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
                                    div.setAttribute("role", "listbox");
                                    return div;
                                },
                                choiceGroup: function(_a, _b) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                                    var id = _b.id, value = _b.value, disabled = _b.disabled;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                                    });
                                    div.setAttribute("role", "group");
                                    Object.assign(div.dataset, {
                                        group: "",
                                        id,
                                        value
                                    });
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    div.appendChild(Object.assign(document.createElement("div"), (_c = {
                                        className: groupHeading
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                                    return div;
                                },
                                choice: function(_a, _b, selectText) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        id: elementId
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), 
                                    _c));
                                    if (isSelected) div.classList.add(selectedState);
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                                    Object.assign(div.dataset, {
                                        choice: "",
                                        id,
                                        value,
                                        selectText
                                    });
                                    if (isDisabled) {
                                        div.classList.add(itemDisabled);
                                        div.dataset.choiceDisabled = "";
                                        div.setAttribute("aria-disabled", "true");
                                    } else {
                                        div.classList.add(itemSelectable);
                                        div.dataset.choiceSelectable = "";
                                    }
                                    return div;
                                },
                                input: function(_a, placeholderValue) {
                                    var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                                    var inp = Object.assign(document.createElement("input"), {
                                        type: "search",
                                        name: "search_terms",
                                        className: "".concat(input, " ").concat(inputCloned),
                                        autocomplete: "off",
                                        autocapitalize: "off",
                                        spellcheck: false
                                    });
                                    inp.setAttribute("role", "textbox");
                                    inp.setAttribute("aria-autocomplete", "list");
                                    inp.setAttribute("aria-label", placeholderValue);
                                    return inp;
                                },
                                dropdown: function(_a) {
                                    var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                                    var div = document.createElement("div");
                                    div.classList.add(list, listDropdown);
                                    div.setAttribute("aria-expanded", "false");
                                    return div;
                                },
                                notice: function(_a, innerText, type) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                                    if (type === void 0) type = "";
                                    var classes = [ item, itemChoice ];
                                    if (type === "no-choices") classes.push(noChoices); else if (type === "no-results") classes.push(noResults);
                                    return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, 
                                    _b.className = classes.join(" "), _b));
                                },
                                option: function(_a) {
                                    var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                                    var opt = new Option(label, value, false, active);
                                    if (customProperties) opt.dataset.customProperties = "".concat(customProperties);
                                    opt.disabled = !!disabled;
                                    return opt;
                                }
                            };
                            exports["default"] = templates;
                        },
                        996: function(module) {
                            var isMergeableObject = function isMergeableObject(value) {
                                return isNonNullObject(value) && !isSpecial(value);
                            };
                            function isNonNullObject(value) {
                                return !!value && typeof value === "object";
                            }
                            function isSpecial(value) {
                                var stringValue = Object.prototype.toString.call(value);
                                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
                            }
                            var canUseSymbol = typeof Symbol === "function" && Symbol.for;
                            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
                            function isReactElement(value) {
                                return value.$$typeof === REACT_ELEMENT_TYPE;
                            }
                            function emptyTarget(val) {
                                return Array.isArray(val) ? [] : {};
                            }
                            function cloneUnlessOtherwiseSpecified(value, options) {
                                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                            }
                            function defaultArrayMerge(target, source, options) {
                                return target.concat(source).map((function(element) {
                                    return cloneUnlessOtherwiseSpecified(element, options);
                                }));
                            }
                            function getMergeFunction(key, options) {
                                if (!options.customMerge) return deepmerge;
                                var customMerge = options.customMerge(key);
                                return typeof customMerge === "function" ? customMerge : deepmerge;
                            }
                            function getEnumerableOwnPropertySymbols(target) {
                                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((function(symbol) {
                                    return target.propertyIsEnumerable(symbol);
                                })) : [];
                            }
                            function getKeys(target) {
                                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                            }
                            function propertyIsOnObject(object, property) {
                                try {
                                    return property in object;
                                } catch (_) {
                                    return false;
                                }
                            }
                            function propertyIsUnsafe(target, key) {
                                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
                            }
                            function mergeObject(target, source, options) {
                                var destination = {};
                                if (options.isMergeableObject(target)) getKeys(target).forEach((function(key) {
                                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                                }));
                                getKeys(source).forEach((function(key) {
                                    if (propertyIsUnsafe(target, key)) return;
                                    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options); else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                                }));
                                return destination;
                            }
                            function deepmerge(target, source, options) {
                                options = options || {};
                                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                                var sourceIsArray = Array.isArray(source);
                                var targetIsArray = Array.isArray(target);
                                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                                if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options); else if (sourceIsArray) return options.arrayMerge(target, source, options); else return mergeObject(target, source, options);
                            }
                            deepmerge.all = function deepmergeAll(array, options) {
                                if (!Array.isArray(array)) throw new Error("first argument should be an array");
                                return array.reduce((function(prev, next) {
                                    return deepmerge(prev, next, options);
                                }), {});
                            };
                            var deepmerge_1 = deepmerge;
                            module.exports = deepmerge_1;
                        },
                        221: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_136441__) {
                            __nested_webpack_require_136441__.r(__nested_webpack_exports__);
                            __nested_webpack_require_136441__.d(__nested_webpack_exports__, {
                                default: function() {
                                    return Fuse;
                                }
                            });
                            function isArray(value) {
                                return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
                            }
                            const INFINITY = 1 / 0;
                            function baseToString(value) {
                                if (typeof value == "string") return value;
                                let result = value + "";
                                return result == "0" && 1 / value == -INFINITY ? "-0" : result;
                            }
                            function toString(value) {
                                return value == null ? "" : baseToString(value);
                            }
                            function isString(value) {
                                return typeof value === "string";
                            }
                            function isNumber(value) {
                                return typeof value === "number";
                            }
                            function isBoolean(value) {
                                return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
                            }
                            function isObject(value) {
                                return typeof value === "object";
                            }
                            function isObjectLike(value) {
                                return isObject(value) && value !== null;
                            }
                            function isDefined(value) {
                                return value !== void 0 && value !== null;
                            }
                            function isBlank(value) {
                                return !value.trim().length;
                            }
                            function getTag(value) {
                                return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
                            }
                            const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
                            const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = key => `Invalid value for key ${key}`;
                            const PATTERN_LENGTH_TOO_LARGE = max => `Pattern length exceeds max of ${max}.`;
                            const MISSING_KEY_PROPERTY = name => `Missing ${name} property in key`;
                            const INVALID_KEY_WEIGHT_VALUE = key => `Property 'weight' in key '${key}' must be a positive integer`;
                            const hasOwn = Object.prototype.hasOwnProperty;
                            class KeyStore {
                                constructor(keys) {
                                    this._keys = [];
                                    this._keyMap = {};
                                    let totalWeight = 0;
                                    keys.forEach((key => {
                                        let obj = createKey(key);
                                        totalWeight += obj.weight;
                                        this._keys.push(obj);
                                        this._keyMap[obj.id] = obj;
                                        totalWeight += obj.weight;
                                    }));
                                    this._keys.forEach((key => {
                                        key.weight /= totalWeight;
                                    }));
                                }
                                get(keyId) {
                                    return this._keyMap[keyId];
                                }
                                keys() {
                                    return this._keys;
                                }
                                toJSON() {
                                    return JSON.stringify(this._keys);
                                }
                            }
                            function createKey(key) {
                                let path = null;
                                let id = null;
                                let src = null;
                                let weight = 1;
                                let getFn = null;
                                if (isString(key) || isArray(key)) {
                                    src = key;
                                    path = createKeyPath(key);
                                    id = createKeyId(key);
                                } else {
                                    if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
                                    const name = key.name;
                                    src = name;
                                    if (hasOwn.call(key, "weight")) {
                                        weight = key.weight;
                                        if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                                    }
                                    path = createKeyPath(name);
                                    id = createKeyId(name);
                                    getFn = key.getFn;
                                }
                                return {
                                    path,
                                    id,
                                    weight,
                                    src,
                                    getFn
                                };
                            }
                            function createKeyPath(key) {
                                return isArray(key) ? key : key.split(".");
                            }
                            function createKeyId(key) {
                                return isArray(key) ? key.join(".") : key;
                            }
                            function get(obj, path) {
                                let list = [];
                                let arr = false;
                                const deepGet = (obj, path, index) => {
                                    if (!isDefined(obj)) return;
                                    if (!path[index]) list.push(obj); else {
                                        let key = path[index];
                                        const value = obj[key];
                                        if (!isDefined(value)) return;
                                        if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value)); else if (isArray(value)) {
                                            arr = true;
                                            for (let i = 0, len = value.length; i < len; i += 1) deepGet(value[i], path, index + 1);
                                        } else if (path.length) deepGet(value, path, index + 1);
                                    }
                                };
                                deepGet(obj, isString(path) ? path.split(".") : path, 0);
                                return arr ? list : list[0];
                            }
                            const MatchOptions = {
                                includeMatches: false,
                                findAllMatches: false,
                                minMatchCharLength: 1
                            };
                            const BasicOptions = {
                                isCaseSensitive: false,
                                includeScore: false,
                                keys: [],
                                shouldSort: true,
                                sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
                            };
                            const FuzzyOptions = {
                                location: 0,
                                threshold: .6,
                                distance: 100
                            };
                            const AdvancedOptions = {
                                useExtendedSearch: false,
                                getFn: get,
                                ignoreLocation: false,
                                ignoreFieldNorm: false,
                                fieldNormWeight: 1
                            };
                            var Config = {
                                ...BasicOptions,
                                ...MatchOptions,
                                ...FuzzyOptions,
                                ...AdvancedOptions
                            };
                            const SPACE = /[^ ]+/g;
                            function norm(weight = 1, mantissa = 3) {
                                const cache = new Map;
                                const m = Math.pow(10, mantissa);
                                return {
                                    get(value) {
                                        const numTokens = value.match(SPACE).length;
                                        if (cache.has(numTokens)) return cache.get(numTokens);
                                        const norm = 1 / Math.pow(numTokens, .5 * weight);
                                        const n = parseFloat(Math.round(norm * m) / m);
                                        cache.set(numTokens, n);
                                        return n;
                                    },
                                    clear() {
                                        cache.clear();
                                    }
                                };
                            }
                            class FuseIndex {
                                constructor({getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                    this.norm = norm(fieldNormWeight, 3);
                                    this.getFn = getFn;
                                    this.isCreated = false;
                                    this.setIndexRecords();
                                }
                                setSources(docs = []) {
                                    this.docs = docs;
                                }
                                setIndexRecords(records = []) {
                                    this.records = records;
                                }
                                setKeys(keys = []) {
                                    this.keys = keys;
                                    this._keysMap = {};
                                    keys.forEach(((key, idx) => {
                                        this._keysMap[key.id] = idx;
                                    }));
                                }
                                create() {
                                    if (this.isCreated || !this.docs.length) return;
                                    this.isCreated = true;
                                    if (isString(this.docs[0])) this.docs.forEach(((doc, docIndex) => {
                                        this._addString(doc, docIndex);
                                    })); else this.docs.forEach(((doc, docIndex) => {
                                        this._addObject(doc, docIndex);
                                    }));
                                    this.norm.clear();
                                }
                                add(doc) {
                                    const idx = this.size();
                                    if (isString(doc)) this._addString(doc, idx); else this._addObject(doc, idx);
                                }
                                removeAt(idx) {
                                    this.records.splice(idx, 1);
                                    for (let i = idx, len = this.size(); i < len; i += 1) this.records[i].i -= 1;
                                }
                                getValueForItemAtKeyId(item, keyId) {
                                    return item[this._keysMap[keyId]];
                                }
                                size() {
                                    return this.records.length;
                                }
                                _addString(doc, docIndex) {
                                    if (!isDefined(doc) || isBlank(doc)) return;
                                    let record = {
                                        v: doc,
                                        i: docIndex,
                                        n: this.norm.get(doc)
                                    };
                                    this.records.push(record);
                                }
                                _addObject(doc, docIndex) {
                                    let record = {
                                        i: docIndex,
                                        $: {}
                                    };
                                    this.keys.forEach(((key, keyIndex) => {
                                        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
                                        if (!isDefined(value)) return;
                                        if (isArray(value)) {
                                            let subRecords = [];
                                            const stack = [ {
                                                nestedArrIndex: -1,
                                                value
                                            } ];
                                            while (stack.length) {
                                                const {nestedArrIndex, value} = stack.pop();
                                                if (!isDefined(value)) continue;
                                                if (isString(value) && !isBlank(value)) {
                                                    let subRecord = {
                                                        v: value,
                                                        i: nestedArrIndex,
                                                        n: this.norm.get(value)
                                                    };
                                                    subRecords.push(subRecord);
                                                } else if (isArray(value)) value.forEach(((item, k) => {
                                                    stack.push({
                                                        nestedArrIndex: k,
                                                        value: item
                                                    });
                                                }));
                                            }
                                            record.$[keyIndex] = subRecords;
                                        } else if (isString(value) && !isBlank(value)) {
                                            let subRecord = {
                                                v: value,
                                                n: this.norm.get(value)
                                            };
                                            record.$[keyIndex] = subRecord;
                                        }
                                    }));
                                    this.records.push(record);
                                }
                                toJSON() {
                                    return {
                                        keys: this.keys,
                                        records: this.records
                                    };
                                }
                            }
                            function createIndex(keys, docs, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys.map(createKey));
                                myIndex.setSources(docs);
                                myIndex.create();
                                return myIndex;
                            }
                            function parseIndex(data, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const {keys, records} = data;
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys);
                                myIndex.setIndexRecords(records);
                                return myIndex;
                            }
                            function computeScore$1(pattern, {errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation} = {}) {
                                const accuracy = errors / pattern.length;
                                if (ignoreLocation) return accuracy;
                                const proximity = Math.abs(expectedLocation - currentLocation);
                                if (!distance) return proximity ? 1 : accuracy;
                                return accuracy + proximity / distance;
                            }
                            function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                                let indices = [];
                                let start = -1;
                                let end = -1;
                                let i = 0;
                                for (let len = matchmask.length; i < len; i += 1) {
                                    let match = matchmask[i];
                                    if (match && start === -1) start = i; else if (!match && start !== -1) {
                                        end = i - 1;
                                        if (end - start + 1 >= minMatchCharLength) indices.push([ start, end ]);
                                        start = -1;
                                    }
                                }
                                if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([ start, i - 1 ]);
                                return indices;
                            }
                            const MAX_BITS = 32;
                            function search(text, pattern, patternAlphabet, {location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation} = {}) {
                                if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                                const patternLen = pattern.length;
                                const textLen = text.length;
                                const expectedLocation = Math.max(0, Math.min(location, textLen));
                                let currentThreshold = threshold;
                                let bestLocation = expectedLocation;
                                const computeMatches = minMatchCharLength > 1 || includeMatches;
                                const matchMask = computeMatches ? Array(textLen) : [];
                                let index;
                                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                                    let score = computeScore$1(pattern, {
                                        currentLocation: index,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    currentThreshold = Math.min(score, currentThreshold);
                                    bestLocation = index + patternLen;
                                    if (computeMatches) {
                                        let i = 0;
                                        while (i < patternLen) {
                                            matchMask[index + i] = 1;
                                            i += 1;
                                        }
                                    }
                                }
                                bestLocation = -1;
                                let lastBitArr = [];
                                let finalScore = 1;
                                let binMax = patternLen + textLen;
                                const mask = 1 << patternLen - 1;
                                for (let i = 0; i < patternLen; i += 1) {
                                    let binMin = 0;
                                    let binMid = binMax;
                                    while (binMin < binMid) {
                                        const score = computeScore$1(pattern, {
                                            errors: i,
                                            currentLocation: expectedLocation + binMid,
                                            expectedLocation,
                                            distance,
                                            ignoreLocation
                                        });
                                        if (score <= currentThreshold) binMin = binMid; else binMax = binMid;
                                        binMid = Math.floor((binMax - binMin) / 2 + binMin);
                                    }
                                    binMax = binMid;
                                    let start = Math.max(1, expectedLocation - binMid + 1);
                                    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                                    let bitArr = Array(finish + 2);
                                    bitArr[finish + 1] = (1 << i) - 1;
                                    for (let j = finish; j >= start; j -= 1) {
                                        let currentLocation = j - 1;
                                        let charMatch = patternAlphabet[text.charAt(currentLocation)];
                                        if (computeMatches) matchMask[currentLocation] = +!!charMatch;
                                        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                                        if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                                        if (bitArr[j] & mask) {
                                            finalScore = computeScore$1(pattern, {
                                                errors: i,
                                                currentLocation,
                                                expectedLocation,
                                                distance,
                                                ignoreLocation
                                            });
                                            if (finalScore <= currentThreshold) {
                                                currentThreshold = finalScore;
                                                bestLocation = currentLocation;
                                                if (bestLocation <= expectedLocation) break;
                                                start = Math.max(1, 2 * expectedLocation - bestLocation);
                                            }
                                        }
                                    }
                                    const score = computeScore$1(pattern, {
                                        errors: i + 1,
                                        currentLocation: expectedLocation,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    if (score > currentThreshold) break;
                                    lastBitArr = bitArr;
                                }
                                const result = {
                                    isMatch: bestLocation >= 0,
                                    score: Math.max(.001, finalScore)
                                };
                                if (computeMatches) {
                                    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                                    if (!indices.length) result.isMatch = false; else if (includeMatches) result.indices = indices;
                                }
                                return result;
                            }
                            function createPatternAlphabet(pattern) {
                                let mask = {};
                                for (let i = 0, len = pattern.length; i < len; i += 1) {
                                    const char = pattern.charAt(i);
                                    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                                }
                                return mask;
                            }
                            class BitapSearch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    this.options = {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.chunks = [];
                                    if (!this.pattern.length) return;
                                    const addChunk = (pattern, startIndex) => {
                                        this.chunks.push({
                                            pattern,
                                            alphabet: createPatternAlphabet(pattern),
                                            startIndex
                                        });
                                    };
                                    const len = this.pattern.length;
                                    if (len > MAX_BITS) {
                                        let i = 0;
                                        const remainder = len % MAX_BITS;
                                        const end = len - remainder;
                                        while (i < end) {
                                            addChunk(this.pattern.substr(i, MAX_BITS), i);
                                            i += MAX_BITS;
                                        }
                                        if (remainder) {
                                            const startIndex = len - MAX_BITS;
                                            addChunk(this.pattern.substr(startIndex), startIndex);
                                        }
                                    } else addChunk(this.pattern, 0);
                                }
                                searchIn(text) {
                                    const {isCaseSensitive, includeMatches} = this.options;
                                    if (!isCaseSensitive) text = text.toLowerCase();
                                    if (this.pattern === text) {
                                        let result = {
                                            isMatch: true,
                                            score: 0
                                        };
                                        if (includeMatches) result.indices = [ [ 0, text.length - 1 ] ];
                                        return result;
                                    }
                                    const {location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation} = this.options;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    let hasMatches = false;
                                    this.chunks.forEach((({pattern, alphabet, startIndex}) => {
                                        const {isMatch, score, indices} = search(text, pattern, alphabet, {
                                            location: location + startIndex,
                                            distance,
                                            threshold,
                                            findAllMatches,
                                            minMatchCharLength,
                                            includeMatches,
                                            ignoreLocation
                                        });
                                        if (isMatch) hasMatches = true;
                                        totalScore += score;
                                        if (isMatch && indices) allIndices = [ ...allIndices, ...indices ];
                                    }));
                                    let result = {
                                        isMatch: hasMatches,
                                        score: hasMatches ? totalScore / this.chunks.length : 1
                                    };
                                    if (hasMatches && includeMatches) result.indices = allIndices;
                                    return result;
                                }
                            }
                            class BaseMatch {
                                constructor(pattern) {
                                    this.pattern = pattern;
                                }
                                static isMultiMatch(pattern) {
                                    return getMatch(pattern, this.multiRegex);
                                }
                                static isSingleMatch(pattern) {
                                    return getMatch(pattern, this.singleRegex);
                                }
                                search() {}
                            }
                            function getMatch(pattern, exp) {
                                const matches = pattern.match(exp);
                                return matches ? matches[1] : null;
                            }
                            class ExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "exact";
                                }
                                static get multiRegex() {
                                    return /^="(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^=(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text === this.pattern;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InverseExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)$/;
                                }
                                search(text) {
                                    const index = text.indexOf(this.pattern);
                                    const isMatch = index === -1;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class PrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InversePrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^!\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = !text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class SuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ text.length - this.pattern.length, text.length - 1 ]
                                    };
                                }
                            }
                            class InverseSuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = !text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class FuzzyMatch extends BaseMatch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    super(pattern);
                                    this._bitapSearch = new BitapSearch(pattern, {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    });
                                }
                                static get type() {
                                    return "fuzzy";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)$/;
                                }
                                search(text) {
                                    return this._bitapSearch.searchIn(text);
                                }
                            }
                            class IncludeMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "include";
                                }
                                static get multiRegex() {
                                    return /^'"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^'(.*)$/;
                                }
                                search(text) {
                                    let location = 0;
                                    let index;
                                    const indices = [];
                                    const patternLen = this.pattern.length;
                                    while ((index = text.indexOf(this.pattern, location)) > -1) {
                                        location = index + patternLen;
                                        indices.push([ index, location - 1 ]);
                                    }
                                    const isMatch = !!indices.length;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices
                                    };
                                }
                            }
                            const searchers = [ ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch ];
                            const searchersLen = searchers.length;
                            const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
                            const OR_TOKEN = "|";
                            function parseQuery(pattern, options = {}) {
                                return pattern.split(OR_TOKEN).map((item => {
                                    let query = item.trim().split(SPACE_RE).filter((item => item && !!item.trim()));
                                    let results = [];
                                    for (let i = 0, len = query.length; i < len; i += 1) {
                                        const queryItem = query[i];
                                        let found = false;
                                        let idx = -1;
                                        while (!found && ++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isMultiMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                found = true;
                                            }
                                        }
                                        if (found) continue;
                                        idx = -1;
                                        while (++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isSingleMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                break;
                                            }
                                        }
                                    }
                                    return results;
                                }));
                            }
                            const MultiMatchSet = new Set([ FuzzyMatch.type, IncludeMatch.type ]);
                            class ExtendedSearch {
                                constructor(pattern, {isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance} = {}) {
                                    this.query = null;
                                    this.options = {
                                        isCaseSensitive,
                                        includeMatches,
                                        minMatchCharLength,
                                        findAllMatches,
                                        ignoreLocation,
                                        location,
                                        threshold,
                                        distance
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.query = parseQuery(this.pattern, this.options);
                                }
                                static condition(_, options) {
                                    return options.useExtendedSearch;
                                }
                                searchIn(text) {
                                    const query = this.query;
                                    if (!query) return {
                                        isMatch: false,
                                        score: 1
                                    };
                                    const {includeMatches, isCaseSensitive} = this.options;
                                    text = isCaseSensitive ? text : text.toLowerCase();
                                    let numMatches = 0;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                                        const searchers = query[i];
                                        allIndices.length = 0;
                                        numMatches = 0;
                                        for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
                                            const searcher = searchers[j];
                                            const {isMatch, indices, score} = searcher.search(text);
                                            if (isMatch) {
                                                numMatches += 1;
                                                totalScore += score;
                                                if (includeMatches) {
                                                    const type = searcher.constructor.type;
                                                    if (MultiMatchSet.has(type)) allIndices = [ ...allIndices, ...indices ]; else allIndices.push(indices);
                                                }
                                            } else {
                                                totalScore = 0;
                                                numMatches = 0;
                                                allIndices.length = 0;
                                                break;
                                            }
                                        }
                                        if (numMatches) {
                                            let result = {
                                                isMatch: true,
                                                score: totalScore / numMatches
                                            };
                                            if (includeMatches) result.indices = allIndices;
                                            return result;
                                        }
                                    }
                                    return {
                                        isMatch: false,
                                        score: 1
                                    };
                                }
                            }
                            const registeredSearchers = [];
                            function register(...args) {
                                registeredSearchers.push(...args);
                            }
                            function createSearcher(pattern, options) {
                                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                                    let searcherClass = registeredSearchers[i];
                                    if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
                                }
                                return new BitapSearch(pattern, options);
                            }
                            const LogicalOperator = {
                                AND: "$and",
                                OR: "$or"
                            };
                            const KeyType = {
                                PATH: "$path",
                                PATTERN: "$val"
                            };
                            const isExpression = query => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
                            const isPath = query => !!query[KeyType.PATH];
                            const isLeaf = query => !isArray(query) && isObject(query) && !isExpression(query);
                            const convertToExplicit = query => ({
                                [LogicalOperator.AND]: Object.keys(query).map((key => ({
                                    [key]: query[key]
                                })))
                            });
                            function parse(query, options, {auto = true} = {}) {
                                const next = query => {
                                    let keys = Object.keys(query);
                                    const isQueryPath = isPath(query);
                                    if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
                                    if (isLeaf(query)) {
                                        const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                                        const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                                        if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                                        const obj = {
                                            keyId: createKeyId(key),
                                            pattern
                                        };
                                        if (auto) obj.searcher = createSearcher(pattern, options);
                                        return obj;
                                    }
                                    let node = {
                                        children: [],
                                        operator: keys[0]
                                    };
                                    keys.forEach((key => {
                                        const value = query[key];
                                        if (isArray(value)) value.forEach((item => {
                                            node.children.push(next(item));
                                        }));
                                    }));
                                    return node;
                                };
                                if (!isExpression(query)) query = convertToExplicit(query);
                                return next(query);
                            }
                            function computeScore(results, {ignoreFieldNorm = Config.ignoreFieldNorm}) {
                                results.forEach((result => {
                                    let totalScore = 1;
                                    result.matches.forEach((({key, norm, score}) => {
                                        const weight = key ? key.weight : null;
                                        totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
                                    }));
                                    result.score = totalScore;
                                }));
                            }
                            function transformMatches(result, data) {
                                const matches = result.matches;
                                data.matches = [];
                                if (!isDefined(matches)) return;
                                matches.forEach((match => {
                                    if (!isDefined(match.indices) || !match.indices.length) return;
                                    const {indices, value} = match;
                                    let obj = {
                                        indices,
                                        value
                                    };
                                    if (match.key) obj.key = match.key.src;
                                    if (match.idx > -1) obj.refIndex = match.idx;
                                    data.matches.push(obj);
                                }));
                            }
                            function transformScore(result, data) {
                                data.score = result.score;
                            }
                            function format(results, docs, {includeMatches = Config.includeMatches, includeScore = Config.includeScore} = {}) {
                                const transformers = [];
                                if (includeMatches) transformers.push(transformMatches);
                                if (includeScore) transformers.push(transformScore);
                                return results.map((result => {
                                    const {idx} = result;
                                    const data = {
                                        item: docs[idx],
                                        refIndex: idx
                                    };
                                    if (transformers.length) transformers.forEach((transformer => {
                                        transformer(result, data);
                                    }));
                                    return data;
                                }));
                            }
                            class Fuse {
                                constructor(docs, options = {}, index) {
                                    this.options = {
                                        ...Config,
                                        ...options
                                    };
                                    if (this.options.useExtendedSearch && !true) ;
                                    this._keyStore = new KeyStore(this.options.keys);
                                    this.setCollection(docs, index);
                                }
                                setCollection(docs, index) {
                                    this._docs = docs;
                                    if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
                                    this._myIndex = index || createIndex(this.options.keys, this._docs, {
                                        getFn: this.options.getFn,
                                        fieldNormWeight: this.options.fieldNormWeight
                                    });
                                }
                                add(doc) {
                                    if (!isDefined(doc)) return;
                                    this._docs.push(doc);
                                    this._myIndex.add(doc);
                                }
                                remove(predicate = (() => false)) {
                                    const results = [];
                                    for (let i = 0, len = this._docs.length; i < len; i += 1) {
                                        const doc = this._docs[i];
                                        if (predicate(doc, i)) {
                                            this.removeAt(i);
                                            i -= 1;
                                            len -= 1;
                                            results.push(doc);
                                        }
                                    }
                                    return results;
                                }
                                removeAt(idx) {
                                    this._docs.splice(idx, 1);
                                    this._myIndex.removeAt(idx);
                                }
                                getIndex() {
                                    return this._myIndex;
                                }
                                search(query, {limit = -1} = {}) {
                                    const {includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm} = this.options;
                                    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                                    computeScore(results, {
                                        ignoreFieldNorm
                                    });
                                    if (shouldSort) results.sort(sortFn);
                                    if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
                                    return format(results, this._docs, {
                                        includeMatches,
                                        includeScore
                                    });
                                }
                                _searchStringList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) results.push({
                                            item: text,
                                            idx,
                                            matches: [ {
                                                score,
                                                value: text,
                                                norm,
                                                indices
                                            } ]
                                        });
                                    }));
                                    return results;
                                }
                                _searchLogical(query) {
                                    const expression = parse(query, this.options);
                                    const evaluate = (node, item, idx) => {
                                        if (!node.children) {
                                            const {keyId, searcher} = node;
                                            const matches = this._findMatches({
                                                key: this._keyStore.get(keyId),
                                                value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                                searcher
                                            });
                                            if (matches && matches.length) return [ {
                                                idx,
                                                item,
                                                matches
                                            } ];
                                            return [];
                                        }
                                        const res = [];
                                        for (let i = 0, len = node.children.length; i < len; i += 1) {
                                            const child = node.children[i];
                                            const result = evaluate(child, item, idx);
                                            if (result.length) res.push(...result); else if (node.operator === LogicalOperator.AND) return [];
                                        }
                                        return res;
                                    };
                                    const records = this._myIndex.records;
                                    const resultMap = {};
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (isDefined(item)) {
                                            let expResults = evaluate(expression, item, idx);
                                            if (expResults.length) {
                                                if (!resultMap[idx]) {
                                                    resultMap[idx] = {
                                                        idx,
                                                        item,
                                                        matches: []
                                                    };
                                                    results.push(resultMap[idx]);
                                                }
                                                expResults.forEach((({matches}) => {
                                                    resultMap[idx].matches.push(...matches);
                                                }));
                                            }
                                        }
                                    }));
                                    return results;
                                }
                                _searchObjectList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {keys, records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (!isDefined(item)) return;
                                        let matches = [];
                                        keys.forEach(((key, keyIndex) => {
                                            matches.push(...this._findMatches({
                                                key,
                                                value: item[keyIndex],
                                                searcher
                                            }));
                                        }));
                                        if (matches.length) results.push({
                                            idx,
                                            item,
                                            matches
                                        });
                                    }));
                                    return results;
                                }
                                _findMatches({key, value, searcher}) {
                                    if (!isDefined(value)) return [];
                                    let matches = [];
                                    if (isArray(value)) value.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            idx,
                                            norm,
                                            indices
                                        });
                                    })); else {
                                        const {v: text, n: norm} = value;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            norm,
                                            indices
                                        });
                                    }
                                    return matches;
                                }
                            }
                            Fuse.version = "6.6.2";
                            Fuse.createIndex = createIndex;
                            Fuse.parseIndex = parseIndex;
                            Fuse.config = Config;
                            Fuse.parseQuery = parse;
                            register(ExtendedSearch);
                        },
                        791: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_177999__) {
                            __nested_webpack_require_177999__.r(__nested_webpack_exports__);
                            __nested_webpack_require_177999__.d(__nested_webpack_exports__, {
                                __DO_NOT_USE__ActionTypes: function() {
                                    return ActionTypes;
                                },
                                applyMiddleware: function() {
                                    return applyMiddleware;
                                },
                                bindActionCreators: function() {
                                    return bindActionCreators;
                                },
                                combineReducers: function() {
                                    return combineReducers;
                                },
                                compose: function() {
                                    return compose;
                                },
                                createStore: function() {
                                    return createStore;
                                },
                                legacy_createStore: function() {
                                    return legacy_createStore;
                                }
                            });
                            function _typeof(obj) {
                                "@babel/helpers - typeof";
                                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                                    return typeof obj;
                                } : function(obj) {
                                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                }, _typeof(obj);
                            }
                            function _toPrimitive(input, hint) {
                                if (_typeof(input) !== "object" || input === null) return input;
                                var prim = input[Symbol.toPrimitive];
                                if (prim !== void 0) {
                                    var res = prim.call(input, hint || "default");
                                    if (_typeof(res) !== "object") return res;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return (hint === "string" ? String : Number)(input);
                            }
                            function _toPropertyKey(arg) {
                                var key = _toPrimitive(arg, "string");
                                return _typeof(key) === "symbol" ? key : String(key);
                            }
                            function _defineProperty(obj, key, value) {
                                key = _toPropertyKey(key);
                                if (key in obj) Object.defineProperty(obj, key, {
                                    value,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }); else obj[key] = value;
                                return obj;
                            }
                            function ownKeys(object, enumerableOnly) {
                                var keys = Object.keys(object);
                                if (Object.getOwnPropertySymbols) {
                                    var symbols = Object.getOwnPropertySymbols(object);
                                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                                    }))), keys.push.apply(keys, symbols);
                                }
                                return keys;
                            }
                            function _objectSpread2(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                                        _defineProperty(target, key, source[key]);
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                                    }));
                                }
                                return target;
                            }
                            function formatProdErrorMessage(code) {
                                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
                            }
                            var $$observable = function() {
                                return typeof Symbol === "function" && Symbol.observable || "@@observable";
                            }();
                            var randomString = function randomString() {
                                return Math.random().toString(36).substring(7).split("").join(".");
                            };
                            var ActionTypes = {
                                INIT: "@@redux/INIT" + randomString(),
                                REPLACE: "@@redux/REPLACE" + randomString(),
                                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                                    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                                }
                            };
                            function isPlainObject(obj) {
                                if (typeof obj !== "object" || obj === null) return false;
                                var proto = obj;
                                while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
                                return Object.getPrototypeOf(obj) === proto;
                            }
                            function createStore(reducer, preloadedState, enhancer) {
                                var _ref2;
                                if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(true ? formatProdErrorMessage(0) : 0);
                                if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                                    enhancer = preloadedState;
                                    preloadedState = void 0;
                                }
                                if (typeof enhancer !== "undefined") {
                                    if (typeof enhancer !== "function") throw new Error(true ? formatProdErrorMessage(1) : 0);
                                    return enhancer(createStore)(reducer, preloadedState);
                                }
                                if (typeof reducer !== "function") throw new Error(true ? formatProdErrorMessage(2) : 0);
                                var currentReducer = reducer;
                                var currentState = preloadedState;
                                var currentListeners = [];
                                var nextListeners = currentListeners;
                                var isDispatching = false;
                                function ensureCanMutateNextListeners() {
                                    if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                                }
                                function getState() {
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(3) : 0);
                                    return currentState;
                                }
                                function subscribe(listener) {
                                    if (typeof listener !== "function") throw new Error(true ? formatProdErrorMessage(4) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(5) : 0);
                                    var isSubscribed = true;
                                    ensureCanMutateNextListeners();
                                    nextListeners.push(listener);
                                    return function unsubscribe() {
                                        if (!isSubscribed) return;
                                        if (isDispatching) throw new Error(true ? formatProdErrorMessage(6) : 0);
                                        isSubscribed = false;
                                        ensureCanMutateNextListeners();
                                        var index = nextListeners.indexOf(listener);
                                        nextListeners.splice(index, 1);
                                        currentListeners = null;
                                    };
                                }
                                function dispatch(action) {
                                    if (!isPlainObject(action)) throw new Error(true ? formatProdErrorMessage(7) : 0);
                                    if (typeof action.type === "undefined") throw new Error(true ? formatProdErrorMessage(8) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(9) : 0);
                                    try {
                                        isDispatching = true;
                                        currentState = currentReducer(currentState, action);
                                    } finally {
                                        isDispatching = false;
                                    }
                                    var listeners = currentListeners = nextListeners;
                                    for (var i = 0; i < listeners.length; i++) {
                                        var listener = listeners[i];
                                        listener();
                                    }
                                    return action;
                                }
                                function replaceReducer(nextReducer) {
                                    if (typeof nextReducer !== "function") throw new Error(true ? formatProdErrorMessage(10) : 0);
                                    currentReducer = nextReducer;
                                    dispatch({
                                        type: ActionTypes.REPLACE
                                    });
                                }
                                function observable() {
                                    var _ref;
                                    var outerSubscribe = subscribe;
                                    return _ref = {
                                        subscribe: function subscribe(observer) {
                                            if (typeof observer !== "object" || observer === null) throw new Error(true ? formatProdErrorMessage(11) : 0);
                                            function observeState() {
                                                if (observer.next) observer.next(getState());
                                            }
                                            observeState();
                                            var unsubscribe = outerSubscribe(observeState);
                                            return {
                                                unsubscribe
                                            };
                                        }
                                    }, _ref[$$observable] = function() {
                                        return this;
                                    }, _ref;
                                }
                                dispatch({
                                    type: ActionTypes.INIT
                                });
                                return _ref2 = {
                                    dispatch,
                                    subscribe,
                                    getState,
                                    replaceReducer
                                }, _ref2[$$observable] = observable, _ref2;
                            }
                            var legacy_createStore = createStore;
                            function assertReducerShape(reducers) {
                                Object.keys(reducers).forEach((function(key) {
                                    var reducer = reducers[key];
                                    var initialState = reducer(void 0, {
                                        type: ActionTypes.INIT
                                    });
                                    if (typeof initialState === "undefined") throw new Error(true ? formatProdErrorMessage(12) : 0);
                                    if (typeof reducer(void 0, {
                                        type: ActionTypes.PROBE_UNKNOWN_ACTION()
                                    }) === "undefined") throw new Error(true ? formatProdErrorMessage(13) : 0);
                                }));
                            }
                            function combineReducers(reducers) {
                                var reducerKeys = Object.keys(reducers);
                                var finalReducers = {};
                                for (var i = 0; i < reducerKeys.length; i++) {
                                    var key = reducerKeys[i];
                                    if (false) ;
                                    if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
                                }
                                var finalReducerKeys = Object.keys(finalReducers);
                                if (false) ;
                                var shapeAssertionError;
                                try {
                                    assertReducerShape(finalReducers);
                                } catch (e) {
                                    shapeAssertionError = e;
                                }
                                return function combination(state, action) {
                                    if (state === void 0) state = {};
                                    if (shapeAssertionError) throw shapeAssertionError;
                                    if (false) ;
                                    var hasChanged = false;
                                    var nextState = {};
                                    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                                        var _key = finalReducerKeys[_i];
                                        var reducer = finalReducers[_key];
                                        var previousStateForKey = state[_key];
                                        var nextStateForKey = reducer(previousStateForKey, action);
                                        if (typeof nextStateForKey === "undefined") {
                                            action && action.type;
                                            throw new Error(true ? formatProdErrorMessage(14) : 0);
                                        }
                                        nextState[_key] = nextStateForKey;
                                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                                    }
                                    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                                    return hasChanged ? nextState : state;
                                };
                            }
                            function bindActionCreator(actionCreator, dispatch) {
                                return function() {
                                    return dispatch(actionCreator.apply(this, arguments));
                                };
                            }
                            function bindActionCreators(actionCreators, dispatch) {
                                if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
                                if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(true ? formatProdErrorMessage(16) : 0);
                                var boundActionCreators = {};
                                for (var key in actionCreators) {
                                    var actionCreator = actionCreators[key];
                                    if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                                }
                                return boundActionCreators;
                            }
                            function compose() {
                                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) funcs[_key] = arguments[_key];
                                if (funcs.length === 0) return function(arg) {
                                    return arg;
                                };
                                if (funcs.length === 1) return funcs[0];
                                return funcs.reduce((function(a, b) {
                                    return function() {
                                        return a(b.apply(void 0, arguments));
                                    };
                                }));
                            }
                            function applyMiddleware() {
                                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) middlewares[_key] = arguments[_key];
                                return function(createStore) {
                                    return function() {
                                        var store = createStore.apply(void 0, arguments);
                                        var _dispatch = function dispatch() {
                                            throw new Error(true ? formatProdErrorMessage(15) : 0);
                                        };
                                        var middlewareAPI = {
                                            getState: store.getState,
                                            dispatch: function dispatch() {
                                                return _dispatch.apply(void 0, arguments);
                                            }
                                        };
                                        var chain = middlewares.map((function(middleware) {
                                            return middleware(middlewareAPI);
                                        }));
                                        _dispatch = compose.apply(void 0, chain)(store.dispatch);
                                        return _objectSpread2(_objectSpread2({}, store), {}, {
                                            dispatch: _dispatch
                                        });
                                    };
                                };
                            }
                            if (false) ;
                        }
                    };
                    var __webpack_module_cache__ = {};
                    function __nested_webpack_require_204296__(moduleId) {
                        var cachedModule = __webpack_module_cache__[moduleId];
                        if (cachedModule !== void 0) return cachedModule.exports;
                        var module = __webpack_module_cache__[moduleId] = {
                            exports: {}
                        };
                        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_204296__);
                        return module.exports;
                    }
                    !function() {
                        __nested_webpack_require_204296__.n = function(module) {
                            var getter = module && module.__esModule ? function() {
                                return module["default"];
                            } : function() {
                                return module;
                            };
                            __nested_webpack_require_204296__.d(getter, {
                                a: getter
                            });
                            return getter;
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.d = function(exports, definition) {
                            for (var key in definition) if (__nested_webpack_require_204296__.o(definition, key) && !__nested_webpack_require_204296__.o(exports, key)) Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.o = function(obj, prop) {
                            return Object.prototype.hasOwnProperty.call(obj, prop);
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.r = function(exports) {
                            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                                value: "Module"
                            });
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        };
                    }();
                    var __nested_webpack_exports__ = {};
                    !function() {
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204296__(373);
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_204296__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
                        var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204296__(187);
                        __nested_webpack_require_204296__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
                        __nested_webpack_require_204296__(883);
                        __nested_webpack_require_204296__(789);
                        __nested_webpack_require_204296__(686);
                        __nested_webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
                    }();
                    __nested_webpack_exports__ = __nested_webpack_exports__["default"];
                    return __nested_webpack_exports__;
                }();
            }));
        },
        958: function(module) {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }("undefined" != typeof self && self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        8741: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = i;
                        },
                        3976: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = i(2839), a = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                ignorables: [ n.keys.Backspace, n.keys.Tab, n.keys.Pause, n.keys.Escape, n.keys.PageUp, n.keys.PageDown, n.keys.End, n.keys.Home, n.keys.ArrowLeft, n.keys.ArrowUp, n.keys.ArrowRight, n.keys.ArrowDown, n.keys.Insert, n.keys.Delete, n.keys.ContextMenu, n.keys.F1, n.keys.F2, n.keys.F3, n.keys.F4, n.keys.F5, n.keys.F6, n.keys.F7, n.keys.F8, n.keys.F9, n.keys.F10, n.keys.F11, n.keys.F12, n.keys.Process, n.keys.Unidentified, n.keys.Shift, n.keys.Control, n.keys.Alt, n.keys.Tab, n.keys.AltGraph, n.keys.CapsLock ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                            t.default = a;
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i) {
                                if (void 0 === i) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = i;
                            };
                        },
                        3776: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var i, n;
                                f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach((function(e) {
                                    var a = l(e.split("."), 2);
                                    (function(e, n) {
                                        var a, r, o = [];
                                        if (e.length > 0) if (void 0 === t) for (a = 0, r = i[e][n].length; a < r; a++) o.push({
                                            ev: e,
                                            namespace: n && n.length > 0 ? n : "global",
                                            handler: i[e][n][a]
                                        }); else o.push({
                                            ev: e,
                                            namespace: n && n.length > 0 ? n : "global",
                                            handler: t
                                        }); else if (n.length > 0) for (var s in i) for (var l in i[s]) if (l === n) if (void 0 === t) for (a = 0, 
                                        r = i[s][l].length; a < r; a++) o.push({
                                            ev: s,
                                            namespace: l,
                                            handler: i[s][l][a]
                                        }); else o.push({
                                            ev: s,
                                            namespace: l,
                                            handler: t
                                        });
                                        return o;
                                    })(a[0], a[1]).forEach((function(e) {
                                        var t = e.ev, a = e.handler;
                                        !function(e, t, a) {
                                            if (e in i == 1) if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), 
                                            "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(a), 1); else i[e][t].splice(i[e][t].indexOf(a), 1);
                                        }(t, e.namespace, a);
                                    }));
                                })));
                                return this;
                            }, t.on = function(e, t) {
                                if (f(this[0])) {
                                    var i = this[0].eventRegistry, n = this[0];
                                    e.split(" ").forEach((function(e) {
                                        var a = l(e.split("."), 2), r = a[0], o = a[1];
                                        !function(e, a) {
                                            n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), 
                                            i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                                        }(r, void 0 === o ? "global" : o);
                                    }));
                                }
                                return this;
                            }, t.trigger = function(e) {
                                var t = arguments;
                                if (f(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [ e.type ], s = 0; s < r.length; s++) {
                                    var l = r[s].split("."), c = l[0], u = l[1] || "global";
                                    if (void 0 !== document && "global" === u) {
                                        var d, p = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            composed: !0,
                                            detail: arguments[1]
                                        };
                                        if (document.createEvent) {
                                            try {
                                                if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p); else d = new CustomEvent(c, p);
                                            } catch (e) {
                                                (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                                            }
                                            e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                                        } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], 
                                        e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                                    } else if (void 0 !== i[c]) {
                                        arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                                        arguments[0].detail = arguments.slice(1);
                                        var h = i[c];
                                        ("global" === u ? Object.values(h).flat() : h[u]).forEach((function(e) {
                                            return e.apply(n, t);
                                        }));
                                    }
                                }
                                return this;
                            };
                            var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
                            function l(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var n, a, r, o, s = [], l = !0, c = !1;
                                        try {
                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                if (Object(i) !== i) return;
                                                l = !1;
                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            function u(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function f(e) {
                                return e instanceof Element;
                            }
                            t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    composed: !0,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                            }, n.prototype = r.default.Event.prototype);
                        },
                        600: function(e, t) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                                "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                                "object" !== i(l) && "function" != typeof l && (l = {});
                                for (;c < u; c++) if (null != (t = arguments[c])) for (n in t) a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                                l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                                return l;
                            };
                        },
                        4963: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var l = a.default.document;
                            function c(e) {
                                return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                            }
                            c.prototype = {
                                on: o.on,
                                off: o.off,
                                trigger: o.trigger
                            }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
                            var u = c;
                            t.default = u;
                        },
                        9845: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mobile = t.iphone = t.ie = void 0;
                            var n, a = (n = i(9380)) && n.__esModule ? n : {
                                default: n
                            };
                            var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
                            t.iphone = l, t.mobile = s, t.ie = o;
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(i, "\\$1");
                            };
                            var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                            function c(e, t) {
                                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!i) {
                                    if (Array.isArray(e) || (i = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return u(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        i && (e = i);
                                        var n = 0, a = function() {};
                                        return {
                                            s: a,
                                            n: function() {
                                                return n >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[n++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: a
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, s = !1;
                                return {
                                    s: function() {
                                        i = i.call(e);
                                    },
                                    n: function() {
                                        var e = i.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        s = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (s) throw r;
                                        }
                                    }
                                };
                            }
                            function u(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            var f = {
                                keyEvent: function(e, t, i, c, u) {
                                    var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                                    if (void 0 !== b) return b;
                                    if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), 
                                    o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join("")); else if (y === a.keys.End || y === a.keys.PageDown) {
                                        e.preventDefault();
                                        var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                                        n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                                    } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), 
                                    n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, 
                                    s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), 
                                    !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), 
                                    k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), 
                                    k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), 
                                    n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout((function() {
                                        var e = n.caret.call(d, m);
                                        n.caret.call(d, m, e.begin);
                                    }), 0) : y === a.keys.ArrowLeft && setTimeout((function() {
                                        var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                                        n.translatePosition.call(d, m.inputmask.caretPos.end);
                                        d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                                    }), 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                                    n.caret.call(d, m, k.begin, k.begin));
                                    return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), 
                                    f.keypressEvent.call(this, e, t, i, c, u);
                                },
                                keypressEvent: function(e, t, i, r, l) {
                                    var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                                    if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                                        if (v) {
                                            var m, g = t ? {
                                                begin: l,
                                                end: l
                                            } : n.caret.call(c, p);
                                            v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                                            var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                                            if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), 
                                            d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, 
                                            !1 !== i && (setTimeout((function() {
                                                u.onKeyValidation.call(p, v, y);
                                            }), 0), d.writeOutBuffer && !1 !== y)) {
                                                var k = n.getBuffer.call(c);
                                                (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                                            }
                                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                        }
                                    } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0));
                                },
                                pasteEvent: function(e) {
                                    var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                                    i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                                    var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                                    if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                                    u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                                    window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                                        if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                        r = l + e.clipboardData.getData("text/plain") + u;
                                    }
                                    var f = r;
                                    if (i.isRTL) {
                                        f = f.split("");
                                        var d, p = c(n.getBufferTemplate.call(i));
                                        try {
                                            for (p.s(); !(d = p.n()).done; ) {
                                                var h = d.value;
                                                f[0] === h && f.shift();
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        f = f.join("");
                                    }
                                    if ("function" == typeof a.onBeforePaste) {
                                        if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                                        f || (f = r);
                                    }
                                    (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                                },
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                                    var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                                    if (p !== d) {
                                        if (c = function(e, a, r) {
                                            for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h; ) u.push(y);
                                            for (;d.length < h; ) d.push(y);
                                            for (;f.length < v; ) f.unshift(y);
                                            for (;p.length < v; ) p.unshift(y);
                                            var k = u.concat(f), b = d.concat(p);
                                            for (s = 0, o = k.length; s < o; s++) switch (c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                            m) {
                                              case "insertText":
                                                b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                k[s] === y ? r.end++ : s = o;
                                                break;

                                              default:
                                                k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", 
                                                g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", 
                                                g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                                g.push(k[s]), r.begin--, r.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: r
                                            };
                                        }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), 
                                        (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), 
                                        !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                                        switch ("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                                        c.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            c.data.forEach((function(e, i) {
                                                var n = new o.Event("keypress");
                                                n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var v = new o.Event("keydown");
                                            v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                                            break;

                                          default:
                                            (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = null == t ? void 0 : t._valueGet();
                                    i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(this, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                                    !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(this, [ e, !0 ]), 
                                    t.undoValue = null == t ? void 0 : t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                                    s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var i = this.inputmask;
                                    i.clicked++;
                                    var a = this;
                                    if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                                        var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                                        void 0 !== r && n.caret.call(i, a, r);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                                    window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                                    o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                                    t.clicked = 0;
                                    var r = a(this), l = this;
                                    if (l.inputmask) {
                                        (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                                        var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                                        "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                                        !1 === o.isComplete.call(t, u) && (setTimeout((function() {
                                            r.trigger("incomplete");
                                        }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                                        (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                                        r.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                                    if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                        var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                        t && (0, s.HandleNativePlaceholder)(i, a);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, s.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                            t.EventHandlers = f;
                        },
                        9716: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var n, a = (n = i(2394)) && n.__esModule ? n : {
                                default: n
                            }, r = i(2839), o = i(8711), s = i(7760);
                            var l = {
                                on: function(e, t, i) {
                                    var n = e.inputmask.dependencyLib, l = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                                        if (void 0 === u && "FORM" !== this.nodeName) {
                                            var d = n.data(c, "_inputmask_opts");
                                            n(c).off(), d && new a.default(d).mask(c);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (l = arguments, void setTimeout((function() {
                                                        e.inputmask && i.apply(c, l);
                                                    }), 0));
                                                }
                                                var p = i.apply(c, arguments);
                                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                                        for (var a in t && ((n = [])[t] = e.inputmask.events[t]), n) {
                                            for (var r = n[a]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                                            }
                                            delete e.inputmask.events[a];
                                        }
                                    }
                                }
                            };
                            t.EventRuler = l;
                        },
                        219: function(e, t, i) {
                            var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
                            function l(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var n, a, r, o, s = [], l = !0, c = !1;
                                        try {
                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                if (Object(i) !== i) return;
                                                l = !1;
                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            function u(e) {
                                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, u(e);
                            }
                            function f(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var n = t[i];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                    Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                                        if ("object" !== u(e) || null === e) return e;
                                        var i = e[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var n = i.call(e, t || "default");
                                            if ("object" !== u(n)) return n;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                                }
                                var a, r;
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var p = n.default.dependencyLib, h = function() {
                                function e(t, i, n) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts);
                                }
                                var t, i, n;
                                return t = e, (i = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                                            if (void 0 !== e) {
                                                if (n) {
                                                    var o = P(t).lastIndex, s = E(i.index, t);
                                                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                                } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                                e = e.slice(r.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, i, n, a) {
                                        if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), 
                                        void 0 !== a) {
                                            var r = e[n];
                                            ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), 
                                            "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), 
                                            "ampm" === n && a.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = !1, g = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return M(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return M(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ "" ],
                                mmmm: [ "" ],
                                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                                    return M(Date.prototype.getFullYear.call(this), 2);
                                } ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return M(Date.prototype.getFullYear.call(this), 4);
                                } ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return M(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return M(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return M(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return M(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return M(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return M(Date.prototype.getMilliseconds.call(this), 3);
                                }, 3 ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return M(Date.prototype.getMilliseconds.call(this), 2);
                                }, 2 ],
                                t: [ "[ap]", k, "ampm", b, 1 ],
                                tt: [ "[ap]m", k, "ampm", b, 2 ],
                                T: [ "[AP]", k, "ampm", b, 1 ],
                                TT: [ "[AP]M", k, "ampm", b, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return l(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, y = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function k(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function b() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function x(e) {
                                var t = new RegExp("\\d+$").exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var i = g[e[0][0] + "x"].slice("");
                                    return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                                }
                                if (g[e[0]]) return g[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], i = [];
                                    for (var n in g) if (/\.*x$/.test(n)) {
                                        var a = n[0] + "\\d+";
                                        -1 === i.indexOf(a) && i.push(a);
                                    } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                                    e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function w(e, t, i) {
                                if (!m) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var n = E(t.pos, i);
                                    if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function S(e, t, i, n) {
                                var a, o, s = "";
                                for (P(i).lastIndex = 0; a = P(i).exec(e); ) if (void 0 === t) if (o = x(a)) s += "(" + o[0] + ")"; else switch (a[0]) {
                                  case "[":
                                    s += "(";
                                    break;

                                  case "]":
                                    s += ")?";
                                    break;

                                  default:
                                    s += (0, r.default)(a[0]);
                                } else if (o = x(a)) if (!0 !== n && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += a[0]; else s += a[0];
                                return s;
                            }
                            function M(e, t, i) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                                return e;
                            }
                            function _(e, t, i) {
                                return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function O(e, t) {
                                return S(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function E(e, t) {
                                var i, n, a = 0, r = 0;
                                for (P(t).lastIndex = 0; n = P(t).exec(t.inputFormat); ) {
                                    var o = new RegExp("\\d+$").exec(n[0]);
                                    if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                                        i = n, n = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: a - r,
                                    nextMatch: n,
                                    targetMatch: i
                                };
                            }
                            n.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                                        e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    i18n: {
                                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                                    },
                                    preValidation: function(e, t, i, n, a, r, o, s) {
                                        if (s) return !0;
                                        if (isNaN(i) && e[t] !== i) {
                                            var l = E(t, a);
                                            if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                                var c = g[l.targetMatch[0]][0];
                                                if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, i, n, a, r, o, l) {
                                        var c, u;
                                        if (o) return !0;
                                        if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                                        void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                                        e[t + 1] = "0", n = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                                            pos: t + 2
                                        })), !1 === n)) return n;
                                        if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                            var f = g[c.targetMatch[0]];
                                            u = f[0];
                                            var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                            if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                            "year" == f[2]) for (var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                            delete r.validPositions[h];
                                        }
                                        var m = n, y = _(e.join(""), a.inputFormat, a);
                                        return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                                            if (e.year !== e.rawyear) {
                                                var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                                if (2 === a.length && a === r) {
                                                    var s = new Date(v, e.month - 1, e.day);
                                                    e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = n, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(y, m, a)), m = function(e, t, i, n, a) {
                                            if (!t) return t;
                                            if (t && i.min && !isNaN(i.min.date.getTime())) {
                                                var r;
                                                for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                                    var o;
                                                    if ((o = x(r)) && o[3]) {
                                                        for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++) void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                                        d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                                        s.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                                            t;
                                        }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                                            buffer: S(a.inputFormat, y, a).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: n.pos
                                            },
                                            pos: n.caret || n.pos
                                        } : m;
                                    },
                                    onKeyDown: function(e, t, i, n) {
                                        e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), 
                                        p(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, i) {
                                        return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                                    },
                                    casing: function(e, t, i, n) {
                                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                                    },
                                    insertMode: !1,
                                    insertModeVisual: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        3851: function(e, t, i) {
                            var n, a = (n = i(2394)) && n.__esModule ? n : {
                                default: n
                            }, r = i(8711), o = i(4713);
                            a.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                            function l(e, t, i, n, a) {
                                return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                                s.test(e);
                            }
                            a.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: l
                                        },
                                        j: {
                                            validator: l
                                        },
                                        k: {
                                            validator: l
                                        },
                                        l: {
                                            validator: l
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                                        if (t) for (var r = 0; r < i; r++) a += "[".concat(t).concat(n, "]");
                                        return a;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, i, n, a, s, l) {
                                        var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, i) {
                            var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var l = n.default.dependencyLib;
                            function c(e, t) {
                                for (var i = "", a = 0; a < e.length; a++) n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                                return i;
                            }
                            function u(e, t, i, n) {
                                if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                                    var a = e.indexOf(i.radixPoint), r = !1;
                                    i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), 
                                    a = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                                }
                                return r && e.push(i.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var i = 0;
                                for (var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                                t.tests) if ((n = parseInt(n)) >= i) for (var a = 0, o = t.tests[n].length; a < o; a++) if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                                return i;
                            }
                            function d(e, t) {
                                for (var i = -1, n = 0, a = t.validPositions.length; n < a; n++) {
                                    var r = t.validPositions[n];
                                    if (r && r.match.def === e) {
                                        i = n;
                                        break;
                                    }
                                }
                                return i;
                            }
                            function p(e, t, i, n, a) {
                                var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                                return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === i ? r + 1 : r,
                                        c: a.radixPoint
                                    },
                                    pos: i
                                } : o;
                            }
                            n.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", i = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var n, r = "[+]";
                                        if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return r += c(e.suffix, e), r += "[-]", n && (r = [ n + c(e.suffix, e) + "[-]", r ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        r;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    substituteRadixPoint: !0,
                                    definitions: {
                                        0: {
                                            validator: p
                                        },
                                        1: {
                                            validator: p,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, i, n, a) {
                                                return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, i, n, a) {
                                                return a.allowMinus && e === a.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, i, n, a, r, o, s) {
                                        if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                                        var l = e.indexOf(a.radixPoint), c = t;
                                        if (t = function(e, t, i, n, a) {
                                            return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                                            if (!0 !== a.allowMinus) return !1;
                                            var u = !1, p = d("+", r), h = d("-", r);
                                            return -1 !== p && (u = [ p, h ]), !1 !== u ? {
                                                remove: u,
                                                caret: c - a.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(this, "+", r),
                                                    c: a.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(this, "-", r),
                                                    c: a.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: c + a.negationSymbol.back.length
                                            };
                                        }
                                        if (i === a.groupSeparator) return {
                                            caret: c
                                        };
                                        if (s) return !0;
                                        if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                                            caret: a._radixDance && t === l - 1 ? l + 1 : l
                                        };
                                        if (!1 === a.__financeInput) if (n) {
                                            if (a.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!a.digitsOptional) {
                                                if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                                    insert: {
                                                        pos: l + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: l
                                                } : {
                                                    rewritePosition: l + 1
                                                };
                                                if (o.begin < l) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: l
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, i, n, a, r, o) {
                                        if (!1 === n) return n;
                                        if (o) return !0;
                                        if (null !== a.min || null !== a.max) {
                                            var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                                            if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                            };
                                        }
                                        return n;
                                    },
                                    onUnMask: function(e, t, i) {
                                        if ("" === t && !0 === i.nullable) return t;
                                        var n = e.replace(i.prefix, "");
                                        return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), 
                                        "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), 
                                        n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                                    },
                                    isComplete: function(e, t) {
                                        var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                                        a.default)(t.radixPoint), ".")), isFinite(i);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var i = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                        var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                                        e = o + ("" !== s ? i + s : s);
                                        var c = 0;
                                        if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                                        "" !== s || !t.digitsOptional)) {
                                            var f = Math.pow(10, c || 1);
                                            e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                                            e = e.toString().replace(".", i);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(i, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                                        }
                                        return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                                    },
                                    onBeforeWrite: function(e, t, i, n) {
                                        function r(e, t) {
                                            if (!1 !== n.__financeInput || t) {
                                                var i = e.indexOf(n.radixPoint);
                                                -1 !== i && e.splice(i, 1);
                                            }
                                            if ("" !== n.groupSeparator) for (;-1 !== (i = e.indexOf(n.groupSeparator)); ) e.splice(i, 1);
                                            return e;
                                        }
                                        var o, s;
                                        if (n.stripLeadingZeroes && (s = function(e, t) {
                                            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                                            return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), 
                                            !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                                        }(t, n))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[c + d], 
                                        delete t[c + d];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== n.min) {
                                                var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== n.min && p < n.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === n.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, 
                                                a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, 
                                                a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== n.radixPoint) t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: r(t)
                                            }));
                                            if (n.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, i, n) {
                                        var a, r = l(this);
                                        if (3 != e.location) {
                                            var s, c = e.key;
                                            if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                                            r.trigger("setvalue"), !1;
                                        }
                                        if (e.ctrlKey) switch (e.key) {
                                          case o.keys.ArrowUp:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), 
                                            r.trigger("setvalue"), !1;

                                          case o.keys.ArrowDown:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), 
                                            r.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                            if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), 
                                            "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), 
                                            r.trigger("setvalue", [ a.join(""), i.begin ]), !1;
                                            if (!0 === n._radixDance) {
                                                var f = t.indexOf(n.radixPoint);
                                                if (n.digitsOptional) {
                                                    if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [ a.join(""), i.begin >= a.length ? a.length : i.begin ]), 
                                                    !1;
                                                } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                                    var d = void 0;
                                                    return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), 
                                                    i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), 
                                                    a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [ a, i.begin >= a.length ? f + 1 : i.begin ]), 
                                                    !1;
                                                }
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t, i) {
                            var n;
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a = ((n = i(8741)) && n.__esModule ? n : {
                                default: n
                            }).default ? window : {};
                            t.default = a;
                        },
                        7760: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var i = e ? e.inputmask : this;
                                if (s.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                                        if (a !== t) {
                                            var o = r.getLastValidPosition.call(i);
                                            -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), 
                                            d(e, n);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                for (var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                                var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                                if ("function" == typeof i.onUnMask) {
                                    var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                                    u = i.onUnMask.call(t, f, u, i);
                                }
                                return u;
                            }, t.writeBuffer = d;
                            var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                            function c(e, t) {
                                var i = e ? e.inputmask : this, n = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), 
                                f(e, !0, !1, t = (t || "").toString().split("")), i.undoValue = i._valueGet(!0), 
                                (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function u(e) {
                                e.length = 0;
                                for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                                return e;
                            }
                            function f(e, t, i, n, s) {
                                var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                                f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                                    begin: m
                                };
                                var k = [], b = c.caretPos;
                                if (h.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var n = new p.Event("_checkval");
                                        n.key = e, v += e;
                                        var o = r.getLastValidPosition.call(c, void 0, !0);
                                        !function(e, t) {
                                            for (var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1]; ) n--;
                                            var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                                var s = r.seekNext.call(c, e);
                                                c.caretPos.begin < s && (c.caretPos = {
                                                    begin: s
                                                });
                                            }
                                            return o;
                                        }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, 
                                        v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), 
                                        c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), 
                                        c.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                                    }
                                })), k.length > 0) {
                                    var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                                    if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift()); ) {
                                        var M = new p.Event("_checkval");
                                        if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                                        S++;
                                    }
                                }
                                t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                                f.skipOptionalPartCharacter = y;
                            }
                            function d(e, t, i, a, s) {
                                var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                                if (a && "function" == typeof c.onBeforeWrite) {
                                    var f = c.onBeforeWrite.call(l, a, t, i, c);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var d = f.refreshFromBuffer;
                                            o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                                        }
                                        void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), 
                                !0 === s)) {
                                    var p = u(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                                        h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                            function v(e) {
                                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, v(e);
                            }
                            function m(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var g = r.default.document, y = "_inputmask_opts";
                            function k(e, t, i) {
                                if (h.default) {
                                    if (!(this instanceof k)) return new k(e, t, i);
                                    this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                    !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                    e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                    this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                    this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                                    this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                                    this.isComposing = !1, this.hasAlternator = !1;
                                }
                            }
                            function b(e, t, i) {
                                var n = k.prototype.aliases[e];
                                return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), 
                                !0) : (null === i.mask && (i.mask = e), !1);
                            }
                            k.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: p.default,
                                definitions: d.default,
                                aliases: {},
                                masksCache: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, i) {
                                        var s = a.default.extend(!0, {}, t.opts);
                                        if (function(e, t, i, n) {
                                            function o(t, a) {
                                                var o = "" === n ? t : n + "-" + t;
                                                null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                                i[t] = a);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var s, l, c, u, f = e.getAttribute(n);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                                l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                                    c = l[u];
                                                    break;
                                                }
                                                for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                                    if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                                        c = l[u];
                                                        break;
                                                    }
                                                    o(s, c);
                                                }
                                            }
                                            a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(i).length;
                                        }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                            void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), 
                                            n.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                                    }
                                    return u.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        a.default.data(this.el, y, null);
                                        var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    c.isComplete.call(this, l.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        u.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                                    for (var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--) ;
                                    return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                                    var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    u.checkVal.call(this, void 0, !0, !1, i);
                                    var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                                    return t ? {
                                        value: n,
                                        metadata: this.getmetadata()
                                    } : n;
                                },
                                setValue: function(e) {
                                    this.el && (0, a.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: o.analyseMask
                            }, k.extendDefaults = function(e) {
                                a.default.extend(!0, k.prototype.defaults, e);
                            }, k.extendDefinitions = function(e) {
                                a.default.extend(!0, k.prototype.definitions, e);
                            }, k.extendAliases = function(e) {
                                a.default.extend(!0, k.prototype.aliases, e);
                            }, k.format = function(e, t, i) {
                                return k(t).format(e, i);
                            }, k.unmask = function(e, t) {
                                return k(t).unmaskedvalue(e);
                            }, k.isValid = function(e, t) {
                                return k(t).isValid(e);
                            }, k.remove = function(e) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, k.setValue = function(e, t) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, k.dependencyLib = a.default, r.default.Inputmask = k;
                            var x = k;
                            t.default = x;
                        },
                        5296: function(e, t, i) {
                            function n(e) {
                                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, n(e);
                            }
                            var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                            function s(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                                        if ("object" !== n(e) || null === e) return e;
                                        var i = e[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var a = i.call(e, t || "default");
                                            if ("object" !== n(a)) return a;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                                }
                                var r, o;
                            }
                            function l(e) {
                                var t = f();
                                return function() {
                                    var i, a = p(e);
                                    if (t) {
                                        var r = p(this).constructor;
                                        i = Reflect.construct(a, arguments, r);
                                    } else i = a.apply(this, arguments);
                                    return function(e, t) {
                                        if (t && ("object" === n(t) || "function" == typeof t)) return t;
                                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                        return function(e) {
                                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return e;
                                        }(e);
                                    }(this, i);
                                };
                            }
                            function c(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return c = function(e) {
                                    if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                    var i;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, n);
                                    }
                                    function n() {
                                        return u(e, arguments, p(this).constructor);
                                    }
                                    return n.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: n,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), d(n, e);
                                }, c(e);
                            }
                            function u(e, t, i) {
                                return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                                    var n = [ null ];
                                    n.push.apply(n, t);
                                    var a = new (Function.bind.apply(e, n));
                                    return i && d(a, i.prototype), a;
                                }, u.apply(null, arguments);
                            }
                            function f() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function d(e, t) {
                                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                    return e.__proto__ = t, e;
                                }, d(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var v = a.default.document;
                            if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                                var m = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), Object.defineProperty(e, "prototype", {
                                            writable: !1
                                        }), t && d(e, t);
                                    }(o, e);
                                    var t, i, n, a = l(o);
                                    function o() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, o);
                                        var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                            mode: "closed"
                                        }), n = v.createElement("input");
                                        for (var s in n.type = "text", i.appendChild(n), t) Object.prototype.hasOwnProperty.call(t, s) && n.setAttribute(t[s], e.getAttribute(t[s]));
                                        var l = new r.default;
                                        return l.dataAttribute = "", l.mask(n), n.inputmask.shadowRoot = i, e;
                                    }
                                    return t = o, i && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
                                        writable: !1
                                    }), t;
                                }(c(HTMLElement));
                                a.default.customElements.define("input-mask", m);
                            }
                        },
                        2839: function(e, t) {
                            function i(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var n, a, r, o, s = [], l = !0, c = !1;
                                        try {
                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                if (Object(i) !== i) return;
                                                l = !1;
                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return n(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function n(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                                return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                            }, t.toKeyCode = function(e) {
                                return a[e];
                            };
                            var a = {
                                AltGraph: 18,
                                ArrowDown: 40,
                                ArrowLeft: 37,
                                ArrowRight: 39,
                                ArrowUp: 38,
                                Backspace: 8,
                                BACKSPACE_SAFARI: 127,
                                CapsLock: 20,
                                Delete: 46,
                                End: 35,
                                Enter: 13,
                                Escape: 27,
                                Home: 36,
                                Insert: 45,
                                PageDown: 34,
                                PageUp: 33,
                                Space: 32,
                                Tab: 9,
                                c: 67,
                                x: 88,
                                z: 90,
                                Shift: 16,
                                Control: 17,
                                Alt: 18,
                                Pause: 19,
                                Meta_LEFT: 91,
                                Meta_RIGHT: 92,
                                ContextMenu: 93,
                                Process: 229,
                                Unidentified: 229,
                                F1: 112,
                                F2: 113,
                                F3: 114,
                                F4: 115,
                                F5: 116,
                                F6: 117,
                                F7: 118,
                                F8: 119,
                                F9: 120,
                                F10: 121,
                                F11: 122,
                                F12: 123
                            };
                            t.keyCode = a;
                            var r = Object.entries(a).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0], r = n[1];
                                return e[r] = void 0 === e[r] ? a : e[r], e;
                            }), {}), o = Object.entries(a).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0];
                                n[1];
                                return e[a] = "Space" === a ? " " : a, e;
                            }), {});
                            t.keys = o;
                        },
                        2391: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, i) {
                                var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                                function y(e, n, a) {
                                    a = void 0 !== a ? a : e.matches.length;
                                    var o = e.matches[a - 1];
                                    if (t) {
                                        if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                                            var s = i.casing ? "i" : "";
                                            /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                                fn: new RegExp(n, s),
                                                static: !1,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                                casing: null,
                                                def: n,
                                                placeholder: void 0,
                                                nativeDef: n
                                            });
                                        } else p && (n = n[n.length - 1]), n.split("").forEach((function(t, n) {
                                            o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                                static: !0,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                                casing: null,
                                                def: i.staticDefinitionSymbol || t,
                                                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                                nativeDef: (p ? "'" : "") + t
                                            });
                                        }));
                                        p = !1;
                                    } else {
                                        var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                                        l && !p ? e.matches.splice(a++, 0, {
                                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                                this.test = l.validator;
                                            } : new RegExp("."),
                                            static: l.static || !1,
                                            optionality: l.optional || !1,
                                            defOptionality: l.optional || !1,
                                            newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                                            casing: l.casing,
                                            def: l.definitionSymbol || n,
                                            placeholder: l.placeholder,
                                            nativeDef: n,
                                            generated: l.generated
                                        }) : (e.matches.splice(a++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || n,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                                            nativeDef: (p ? "'" : "") + n
                                        }), p = !1);
                                    }
                                }
                                function k() {
                                    if (v.length > 0) {
                                        if (y(l = v[v.length - 1], o), l.isAlternator) {
                                            c = v.pop();
                                            for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                            v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                                        }
                                    } else y(h, o);
                                }
                                function b(e) {
                                    var t = new a.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function x() {
                                    if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                                        if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                            for (var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                                            c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                            e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                            v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                                        }
                                    } else h.matches.push(s); else k();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                                }
                                t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                                for (;n = t ? d.exec(e) : f.exec(e); ) {
                                    if (o = n[0], t) {
                                        switch (o.charAt(0)) {
                                          case "?":
                                            o = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            o = "{" + o + "}";
                                            break;

                                          case "|":
                                            if (0 === v.length) {
                                                var w = b(h.matches);
                                                w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                                            }
                                        }
                                        switch (o) {
                                          case "\\d":
                                            o = "[0-9]";
                                            break;

                                          case "\\p":
                                            o += d.exec(e)[0], o += d.exec(e)[0];
                                        }
                                    }
                                    if (p) k(); else switch (o.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || k();
                                        break;

                                      case i.escapeChar:
                                        p = !0, t && k();
                                        break;

                                      case i.optionalmarker[1]:
                                      case i.groupmarker[1]:
                                        x();
                                        break;

                                      case i.optionalmarker[0]:
                                        v.push(new a.default(!1, !0));
                                        break;

                                      case i.groupmarker[0]:
                                        v.push(new a.default(!0));
                                        break;

                                      case i.quantifiermarker[0]:
                                        var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                                        "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                            min: O,
                                            max: E,
                                            jit: T
                                        };
                                        var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                        (n = j.pop()).isGroup || (n = b([ n ])), j.push(n), j.push(S);
                                        break;

                                      case i.alternatormarker:
                                        if (v.length > 0) {
                                            var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                            u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                                        } else u = P(h.matches);
                                        if (u.isAlternator) v.push(u); else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), 
                                        c.matches.push(u), v.push(c), u.openGroup) {
                                            u.openGroup = !1;
                                            var D = new a.default(!0);
                                            D.alternatorGroup = !0, v.push(D);
                                        }
                                        break;

                                      default:
                                        k();
                                    }
                                }
                                g && x();
                                for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                                h.matches.length > 0 && (!function e(n) {
                                    n && n.matches && n.matches.forEach((function(a, r) {
                                        var o = n.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                                        t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), 
                                        e(a);
                                    }));
                                }(h), m.push(h));
                                (i.numericInput || i.isRTL) && function e(t) {
                                    for (var n in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                                        var a = parseInt(n);
                                        if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                            var r = t.matches[n];
                                            t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                                        }
                                        void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(m[0]);
                                return m;
                            }, t.generateMaskSet = function(e, t) {
                                var i;
                                function a(e, t) {
                                    var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                                    if (i > 0 || "*" === i || "+" === i) {
                                        var l = "*" === i ? 0 : "+" === i ? 1 : i;
                                        e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                                    }
                                    if (!0 === r) {
                                        var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                                        c && c.forEach((function(t, i) {
                                            var n = function(e, t) {
                                                return function(e) {
                                                    if (Array.isArray(e)) return e;
                                                }(e) || function(e, t) {
                                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                    if (null != i) {
                                                        var n, a, r, o, s = [], l = !0, c = !1;
                                                        try {
                                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                                if (Object(i) !== i) return;
                                                                l = !1;
                                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                                        } catch (e) {
                                                            c = !0, a = e;
                                                        } finally {
                                                            try {
                                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                                            } finally {
                                                                if (c) throw a;
                                                            }
                                                        }
                                                        return s;
                                                    }
                                                }(e, t) || function(e, t) {
                                                    if (!e) return;
                                                    if ("string" == typeof e) return s(e, t);
                                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                                }(e, t) || function() {
                                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                }();
                                            }(t.split("["), 2), a = n[0], r = n[1];
                                            r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, 
                                            o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                                        }));
                                    }
                                    return e;
                                }
                                function l(e, i, o) {
                                    var s, l, c = !1;
                                    return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                                    e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), 
                                    e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, c, o),
                                        validPositions: [],
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: i,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                                    s;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var c = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                                        })), l(c += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return i;
                            };
                            var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                                o.EventRuler.off(i);
                                var f = function(t, i) {
                                    "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                                    var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!l) if ("input" === t.tagName.toLowerCase()) {
                                        var c = document.createElement("input");
                                        c.setAttribute("type", s), l = "text" === c.type, c = null;
                                    } else l = "partial";
                                    return !1 !== l ? function(t) {
                                        var n, s;
                                        function l() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                                        }
                                        function c(e) {
                                            s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== i.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                                        get: l,
                                                        set: c,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                                        return this.textContent;
                                                    }, s = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: l,
                                                        set: c,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                                s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                                t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                            }, t.inputmask._valueSet = function(t, i) {
                                                s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === n && (n = function() {
                                                return this.value;
                                            }, s = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                                    var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    u.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var r = n(t);
                                                                return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                            }
                                                            return n(t);
                                                        },
                                                        set: function(e, t) {
                                                            var i = o(e, t);
                                                            return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(e) {
                                                o.EventRuler.on(e, "mouseenter", (function() {
                                                    var e = this, t = e.inputmask._valueGet(!0);
                                                    t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, 
                                                    r.applyInputValue)(e, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, l;
                                }(i, t);
                                if (!1 !== f) {
                                    e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                                    i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                                    s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                                    o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                                    o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                                    o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                                    o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                                    o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                                    o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), 
                                    (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), 
                                    o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), 
                                    e.undoValue = e._valueGet(!0);
                                    var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                    if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                                        (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                        var p = a.getBuffer.call(e).slice();
                                        !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                                        r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i, n) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var i = Object(this), n = i.length >>> 0;
                                    if (0 === n) return !1;
                                    for (var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n; ) {
                                        if (i[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        9302: function() {
                            var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
                            Object.entries || (Object.entries = function(a) {
                                return e(n(a), (function(e, n) {
                                    return i(e, "string" == typeof n && t(a, n) ? [ [ n, a[n] ] ] : []);
                                }), []);
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        4013: function() {
                            String.prototype.includes || (String.prototype.includes = function(e, t) {
                                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                            });
                        },
                        8711: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, i, n, a) {
                                var r, o = this, s = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                                i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                                {
                                    begin: n ? t : c.call(o, t),
                                    end: n ? i : c.call(o, i)
                                };
                                if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                                    var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                    if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: i
                                    }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                        if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                            var u = document.createTextNode("");
                                            e.appendChild(u);
                                        }
                                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                        r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                        r.collapse(!0);
                                        var f = window.getSelection();
                                        f.removeAllRanges(), f.addRange(r);
                                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                                    r.moveStart("character", t), r.select());
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                                for (t = f + 1; t < c.length; t++) h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                                d[t] = l.extend(!0, {}, i);
                                var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                                for (t = u - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match); t--) u--;
                                return e ? {
                                    l: u,
                                    def: d[u] ? d[u].match : void 0
                                } : u;
                            }, t.determineNewCaretPosition = function(e, t, i) {
                                var a = this, c = a.maskset, u = a.opts;
                                t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (i = i || u.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: r.call(a).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = l.call(a, o.call(a));
                                        break;

                                      case "radixFocus":
                                        if (a.clicked > 1 && 0 == c.validPositions.length) break;
                                        if (function(e) {
                                            if ("" !== u.radixPoint && 0 !== u.digits) {
                                                var t = c.validPositions;
                                                if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                                    if (e < l.call(a, -1)) return !0;
                                                    var i = r.call(a).indexOf(u.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var f = r.call(a).join("").indexOf(u.radixPoint);
                                            e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                                            break;
                                        }

                                      default:
                                        var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                                        if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d); else {
                                            var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                                            if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                                var y = l.call(a, h);
                                                (d >= y || d === h) && (h = y);
                                            }
                                            e.end = e.begin = h;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = r, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                            }, t.seekNext = l, t.seekPrevious = function(e, t) {
                                var i = this, a = e - 1;
                                if (e <= 0) return 0;
                                for (;a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0)); ) a--;
                                return a;
                            }, t.translatePosition = c;
                            var n = i(4713), a = i(7215);
                            function r(e) {
                                var t = this, i = t.maskset;
                                return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), 
                                void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
                            }
                            function o(e, t, i) {
                                var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                                void 0 === e && (e = -1);
                                for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), 
                                s >= e && (r = s));
                                return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                            }
                            function s(e, t, i) {
                                var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                                if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                                if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (i) {
                                        var s = n.getTests.call(a, e);
                                        return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                                    }
                                    var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                                    return l.match.def !== c;
                                }
                                return !1;
                            }
                            function l(e, t, i) {
                                var a = this;
                                void 0 === i && (i = !0);
                                for (var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i)); ) r++;
                                return r;
                            }
                            function c(e) {
                                var t = this.opts, i = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                                e;
                            }
                        },
                        4713: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                                var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                                a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, h, v, m, g = [], y = 0;
                                do {
                                    if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, 
                                    p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h)); else {
                                        h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                                        var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                                        (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y]) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                                    }
                                    y++;
                                } while (!0 !== h.static || "" !== h.def || t > y);
                                "" === g[g.length - 1] && g.pop();
                                !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                                return o.greedy = f, g;
                            }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
                            var n, a = (n = i(2394)) && n.__esModule ? n : {
                                default: n
                            };
                            function r(e, t) {
                                var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                                if ("" !== i) for (;i.length < t; ) i += "0";
                                return i;
                            }
                            function o(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function s(e, t, i) {
                                var n = this.opts, a = this.maskset;
                                if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === a.validPositions[e]) {
                                        var r, o = d.call(this, e), s = [];
                                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), 
                                        !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return n.placeholder.charAt(e % n.placeholder.length);
                            }
                            function l(e, t, i) {
                                return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                            }
                            function c(e, t) {
                                var i = this.opts, n = 0, a = function(e, t) {
                                    var i = 0, n = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                                    })), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                                    return i;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var o, s, l, c = r(u.call(this, e));
                                i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                                for (var f = 0; f < t.length - n; f++) {
                                    var d = t[f];
                                    o = r(d, c.length);
                                    var p = Math.abs(o - c);
                                    (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, 
                                    l = d);
                                }
                                return l;
                            }
                            function u(e, t) {
                                var i = this.maskset;
                                return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                            }
                            function f(e, t, i) {
                                function n(e) {
                                    for (var t, i = [], n = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++n < t; ) i.push(String.fromCharCode(n)); else n = e.charCodeAt(a), 
                                    i.push(e.charAt(a));
                                    return i.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function d(e, t, i) {
                                var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "";
                                function k(t, i, r, s) {
                                    function c(r, s, p) {
                                        function v(e, t) {
                                            var i = 0 === t.matches.indexOf(e);
                                            return i || t.matches.every((function(n, a) {
                                                return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), 
                                                !i;
                                            })), i;
                                        }
                                        function x(e, t, i) {
                                            var n, a;
                                            if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every((function(e, r) {
                                                if (e.mloc[t]) return n = e, !1;
                                                var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                                            })), n) {
                                                var r = n.locator[n.alternation];
                                                return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                                            }
                                            return void 0 !== i ? x(e, t) : void 0;
                                        }
                                        function P(e, t) {
                                            var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                            if (!n && i > t.alternation) for (var a = t.alternation; a < i; a++) if (e.locator[a] !== t.locator[a]) {
                                                i = a, n = !0;
                                                break;
                                            }
                                            if (n) {
                                                e.mloc = e.mloc || {};
                                                var r = e.locator[i];
                                                if (void 0 !== r) {
                                                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                                    void 0 !== t) {
                                                        for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                                        e.locator[i] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return !0;
                                                }
                                                e.alternation = void 0;
                                            }
                                            return !1;
                                        }
                                        function w(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                            return !0;
                                        }
                                        if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: s.reverse(),
                                                cd: y,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && p !== r) return function() {
                                                if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                                            }();
                                            if (r.isOptional) return function() {
                                                var t = r, a = m.length;
                                                if (r = k(r, i, s, p), m.length > 0) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                                    g = !0, h = e;
                                                }
                                            }();
                                            if (r.isAlternator) return function() {
                                                o.hasAlternator = !0;
                                                var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                                if (-1 === _ || "string" == typeof _) {
                                                    var O, E = h, T = i.slice(), j = [];
                                                    if ("string" == typeof _) j = _.split(","); else for (O = 0; O < y.matches.length; O++) j.push(O.toString());
                                                    if (void 0 !== l.excludes[e]) {
                                                        for (var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++) {
                                                            var C = l.excludes[e][D].toString().split(":");
                                                            s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                                        }
                                                        0 === j.length && (delete l.excludes[e], j = A);
                                                    }
                                                    (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                                    for (var R = 0; R < j.length; R++) {
                                                        O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                                        var L = y.matches[O];
                                                        if (L && c(L, [ O ].concat(s), p)) r = !0; else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                                        n = m.slice(), h = E, m = [];
                                                        for (var F = 0; F < n.length; F++) {
                                                            var I = n[F], N = !1;
                                                            I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                                            for (var V = 0; V < k.length; V++) {
                                                                var G = k[V];
                                                                if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                                    if (I.match.nativeDef === G.match.nativeDef) {
                                                                        N = !0, P(G, I);
                                                                        break;
                                                                    }
                                                                    if (f(I, G, u)) {
                                                                        P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                                        break;
                                                                    }
                                                                    if (f(G, I, u)) {
                                                                        P(G, I);
                                                                        break;
                                                                    }
                                                                    if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                                        w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            N || k.push(I);
                                                        }
                                                    }
                                                    m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                                } else r = c(y.matches[_] || t.matches[_], [ _ ].concat(s), p);
                                                if (r) return !0;
                                            }();
                                            if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                                for (var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++) {
                                                    var d = t.matches[t.matches.indexOf(a) - 1];
                                                    if (r = c(d, [ f ].concat(s), d)) {
                                                        if (m.forEach((function(t, i) {
                                                            (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, 
                                                            n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, 
                                                            h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                            y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                                        })), o) break;
                                                        return !0;
                                                    }
                                                }
                                            }();
                                            if (r = k(r, i, s, p)) return !0;
                                        } else h++;
                                    }
                                    for (var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                                        var v = c(t.matches[p], [ p ].concat(r), s);
                                        if (v && h === e) return v;
                                        if (h > e) break;
                                    }
                                }
                                function b(e, t) {
                                    var i = -1 != e.matches.indexOf(t);
                                    return i || e.matches.forEach((function(e, n) {
                                        void 0 === e.matches || i || (i = b(e, t));
                                    })), i;
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1; ) P--;
                                        void 0 !== x && P > -1 && (v = function(e, t) {
                                            var i, n = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                                            }))), n;
                                        }(P, x), y = v.join(""), h = P);
                                    }
                                    if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                                    for (var w = v.shift(); w < p.length; w++) if (k(p[w], v, [ w ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: [],
                                    mloc: {},
                                    cd: y
                                }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), 
                                r = l.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = e.match.defOptionality || !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                                for (var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                                for (var l = 0; l < e.length; l++) if (a.includes(e[l])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, i, o, l) {
                                var c = this, u = this.maskset, f = this.opts;
                                if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                                c.isRTL)) {
                                    var d = i.end;
                                    i.end = i.begin, i.begin = d;
                                }
                                var p, h = r.getLastValidPosition.call(c, void 0, !0);
                                i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                                t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                                if (!1 !== (p = v.call(c, i))) {
                                    if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                                        var m = s.call(c, !0);
                                        if (m) {
                                            var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                            (t !== a.keys.Delete || i.begin > g) && i.begin;
                                        }
                                    }
                                    !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                                        begin: u.p,
                                        end: u.p
                                    }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                                }
                            }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, 
                            t.revalidateMask = v;
                            var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
                            function s(e, t, i, a, o, l) {
                                var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                                if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), 
                                -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                                    if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                                    c = T, u = S.validPositions[c].alternation, p = d;
                                }
                                if (void 0 !== u) {
                                    m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                                    n.getDecisionTaker)(p) + ":" + p.alternation);
                                    var j = [], A = -1;
                                    for (h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (j.push(t), 
                                    A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), 
                                    delete S.validPositions[h];
                                    for (-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                                        for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                                        y = j[h], O = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = O), 1 == e && O && (E = {
                                            caretPos: h
                                        });
                                        if (O) break;
                                        if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), 
                                        S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                            E = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        var D = (0, n.getDecisionTaker)(p);
                                        if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                            E = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                                    }
                                }
                                return E && !1 === w.keepStatic || delete S.excludes[m], E;
                            }
                            function l(e, t, i) {
                                var n = this.opts, r = this.maskset;
                                switch (n.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = r.validPositions[i - 1];
                                    e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof n.casing) {
                                        var s = Array.prototype.slice.call(arguments);
                                        s.push(r.validPositions), e = n.casing.apply(this, s);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, i = this.opts, a = this.maskset;
                                if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                                if ("*" !== i.repeat) {
                                    var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                                    if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                                        o = !0;
                                        for (var c = 0; c <= l; c++) {
                                            var u = n.getTestTemplate.call(t, c).match;
                                            if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                                o = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return o;
                                }
                            }
                            function u(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function f(e, t, i, a, o, d, m) {
                                var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                                i = !0 === i;
                                var x = e;
                                function P(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                                        })).forEach((function(e) {
                                            v.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function w(t, i, o) {
                                    var s = !1;
                                    return n.getTests.call(g, t).every((function(c, f) {
                                        var d = c.match;
                                        if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                                            c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                            pos: t
                                        }))) {
                                            var p = void 0 !== s.c ? s.c : i, h = t;
                                            return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                            !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                                input: l.call(g, p, d, h)
                                            }), a, h) && (s = !1), !1);
                                        }
                                        return !0;
                                    })), s;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, M = y.extend(!0, {}, b.validPositions);
                                if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                                delete b.tests[_]);
                                if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), 
                                !0 === S) {
                                    if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                                        var O = b.validPositions[x];
                                        if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                            if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                                var E = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                                E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++) if (!1 !== (S = w(T, t, i))) {
                                                    S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: r.seekNext.call(g, x)
                                        };
                                    }
                                    g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                                    var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                                var D = P(S);
                                void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], M), D = !1);
                                return D;
                            }
                            function d(e, t, i) {
                                for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                                    if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                                        r = !0;
                                        break;
                                    }
                                    if (o[s].match && o[s].match.def === t.match.nativeDef) {
                                        r = void 0;
                                        break;
                                    }
                                }
                                return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                                r;
                            }
                            function p(e, t, i) {
                                var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                                if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, 
                                e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (n = e; n < t; n++) delete l.validPositions[n];
                                    a = e;
                                }
                                var p = new u.Event("keypress");
                                for (n = e; n < t; n++) {
                                    p.key = d[n].toString(), s.ignorable = !1;
                                    var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                                    !1 !== h && void 0 !== h && (a = h.forwardPosition);
                                }
                                c.skipOptionalPartCharacter = f;
                            }
                            function h(e, t, i) {
                                var a = this, o = this.maskset, s = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--) ;
                                for (var l = e; l < t; l++) if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                                    var c = n.getTests.call(a, l).slice();
                                    "" === c[c.length - 1].match.def && c.pop();
                                    var u, d = n.determineTestTemplate.call(a, l, c);
                                    if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                        input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                                    })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                        var p = o.validPositions[t].input;
                                        return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                                    }
                                }
                            }
                            function v(e, t, i, a) {
                                var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                                function u(e, t, i) {
                                    var n = t[e];
                                    if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return a && r;
                                    }
                                    return !1;
                                }
                                var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                                if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                                    var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                                    for (s.p = h, g = k; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                                    var b, x, P = a, w = P;
                                    for (t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++) {
                                        if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                                            begin: h,
                                            end: v
                                        }))) {
                                            for (;"" !== n.getTest.call(o, w).match.def; ) {
                                                if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                                    "+" === b.match.def && r.getBuffer.call(o, !0);
                                                    var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                                    if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                                } else m = !1;
                                                if (m) {
                                                    void 0 === t && b.match.static && g === e.begin && p++;
                                                    break;
                                                }
                                                if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                                w++;
                                            }
                                            "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                                        }
                                        if (!m) break;
                                    }
                                    if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), 
                                    !1;
                                } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                                return r.resetMaskSet.call(o, !0), p;
                            }
                        }
                    }, t = {};
                    function i(n) {
                        var a = t[n];
                        if (void 0 !== a) return a.exports;
                        var r = t[n] = {
                            exports: {}
                        };
                        return e[n](r, r.exports, i), r.exports;
                    }
                    var n = {};
                    return function() {
                        var e, t = n;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), 
                        i(5296);
                        var a = ((e = i(2394)) && e.__esModule ? e : {
                            default: e
                        }).default;
                        t.default = a;
                    }(), n;
                }();
            }));
        },
        837: (module, exports) => {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * viewport-units-buggyfill v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */            (function() {
                (function(root, factory) {
                    "use strict";
                    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
                    __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                    __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                })(0, (function() {
                    "use strict";
                    var initialized = false;
                    var options;
                    var userAgent = window.navigator.userAgent;
                    var viewportUnitExpression = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
                    var urlExpression = /(https?:)?\/\//;
                    var forEach = [].forEach;
                    var dimensions;
                    var declarations;
                    var styleNode;
                    var isBuggyIE = /MSIE [0-9]\./i.test(userAgent);
                    var isOldIE = /MSIE [0-8]\./i.test(userAgent);
                    var isOperaMini = userAgent.indexOf("Opera Mini") > -1;
                    var isMobileSafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && function() {
                        var iOSversion = userAgent.match(/OS (\d)/);
                        return iOSversion && iOSversion.length > 1 && parseInt(iOSversion[1]) < 10;
                    }();
                    var isBadStockAndroid = function() {
                        var isAndroid = userAgent.indexOf(" Android ") > -1;
                        if (!isAndroid) return false;
                        var isStockAndroid = userAgent.indexOf("Version/") > -1;
                        if (!isStockAndroid) return false;
                        var versionNumber = parseFloat((userAgent.match("Android ([0-9.]+)") || [])[1]);
                        return versionNumber <= 4.4;
                    }();
                    if (!isBuggyIE) isBuggyIE = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./);
                    try {
                        new CustomEvent("test");
                    } catch (e) {
                        var CustomEvent = function(event, params) {
                            var evt;
                            params = params || {
                                bubbles: false,
                                cancelable: false,
                                detail: void 0
                            };
                            evt = document.createEvent("CustomEvent");
                            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                            return evt;
                        };
                        CustomEvent.prototype = window.Event.prototype;
                        window.CustomEvent = CustomEvent;
                    }
                    function debounce(func, wait) {
                        var timeout;
                        return function() {
                            var context = this;
                            var args = arguments;
                            var callback = function() {
                                func.apply(context, args);
                            };
                            clearTimeout(timeout);
                            timeout = setTimeout(callback, wait);
                        };
                    }
                    function inIframe() {
                        try {
                            return window.self !== window.top;
                        } catch (e) {
                            return true;
                        }
                    }
                    function initialize(initOptions) {
                        if (initialized) return;
                        if (initOptions === true) initOptions = {
                            force: true
                        };
                        options = initOptions || {};
                        options.isMobileSafari = isMobileSafari;
                        options.isBadStockAndroid = isBadStockAndroid;
                        if (options.ignoreVmax && !options.force && !isOldIE) isBuggyIE = false;
                        if (isOldIE || !options.force && !isMobileSafari && !isBuggyIE && !isBadStockAndroid && !isOperaMini && (!options.hacks || !options.hacks.required(options))) {
                            if (window.console && isOldIE) console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below");
                            return {
                                init: function() {}
                            };
                        }
                        window.dispatchEvent(new CustomEvent("viewport-units-buggyfill-init"));
                        options.hacks && options.hacks.initialize(options);
                        initialized = true;
                        styleNode = document.createElement("style");
                        styleNode.id = "patched-viewport";
                        document[options.appendToBody ? "body" : "head"].appendChild(styleNode);
                        importCrossOriginLinks((function() {
                            var _refresh = debounce(refresh, options.refreshDebounceWait || 100);
                            window.addEventListener("orientationchange", _refresh, true);
                            window.addEventListener("pageshow", _refresh, true);
                            if (options.force || isBuggyIE || inIframe()) {
                                window.addEventListener("resize", _refresh, true);
                                options._listeningToResize = true;
                            }
                            options.hacks && options.hacks.initializeEvents(options, refresh, _refresh);
                            refresh();
                        }));
                    }
                    function updateStyles() {
                        styleNode.textContent = getReplacedViewportUnits();
                        styleNode.parentNode.appendChild(styleNode);
                        window.dispatchEvent(new CustomEvent("viewport-units-buggyfill-style"));
                    }
                    function refresh() {
                        if (!initialized) return;
                        findProperties();
                        setTimeout((function() {
                            updateStyles();
                        }), 1);
                    }
                    function processStylesheet(ss) {
                        try {
                            if (!ss.cssRules) return;
                        } catch (e) {
                            if (e.name !== "SecurityError") throw e;
                            return;
                        }
                        var rules = [];
                        for (var i = 0; i < ss.cssRules.length; i++) {
                            var rule = ss.cssRules[i];
                            rules.push(rule);
                        }
                        return rules;
                    }
                    function findProperties() {
                        declarations = [];
                        forEach.call(document.styleSheets, (function(sheet) {
                            var cssRules = processStylesheet(sheet);
                            if (!cssRules || sheet.ownerNode.id === "patched-viewport" || sheet.ownerNode.getAttribute("data-viewport-units-buggyfill") === "ignore") return;
                            if (sheet.media && sheet.media.mediaText && window.matchMedia && !window.matchMedia(sheet.media.mediaText).matches) return;
                            forEach.call(cssRules, findDeclarations);
                        }));
                        return declarations;
                    }
                    function findDeclarations(rule) {
                        if (rule.type === 7) {
                            var value;
                            try {
                                value = rule.cssText;
                            } catch (e) {
                                return;
                            }
                            viewportUnitExpression.lastIndex = 0;
                            if (viewportUnitExpression.test(value) && !urlExpression.test(value)) {
                                declarations.push([ rule, null, value ]);
                                options.hacks && options.hacks.findDeclarations(declarations, rule, null, value);
                            }
                            return;
                        }
                        if (!rule.style) {
                            if (!rule.cssRules) return;
                            forEach.call(rule.cssRules, (function(_rule) {
                                findDeclarations(_rule);
                            }));
                            return;
                        }
                        forEach.call(rule.style, (function(name) {
                            var value = rule.style.getPropertyValue(name);
                            if (rule.style.getPropertyPriority(name)) value += " !important";
                            viewportUnitExpression.lastIndex = 0;
                            if (viewportUnitExpression.test(value)) {
                                declarations.push([ rule, name, value ]);
                                options.hacks && options.hacks.findDeclarations(declarations, rule, name, value);
                            }
                        }));
                    }
                    function getReplacedViewportUnits() {
                        dimensions = getViewport();
                        var css = [];
                        var buffer = [];
                        var open;
                        var close;
                        declarations.forEach((function(item) {
                            var _item = overwriteDeclaration.apply(null, item);
                            var _open = _item.selector.length ? _item.selector.join(" {\n") + " {\n" : "";
                            var _close = new Array(_item.selector.length + 1).join("\n}");
                            if (!_open || _open !== open) {
                                if (buffer.length) {
                                    css.push(open + buffer.join("\n") + close);
                                    buffer.length = 0;
                                }
                                if (_open) {
                                    open = _open;
                                    close = _close;
                                    buffer.push(_item.content);
                                } else {
                                    css.push(_item.content);
                                    open = null;
                                    close = null;
                                }
                                return;
                            }
                            if (_open && !open) {
                                open = _open;
                                close = _close;
                            }
                            buffer.push(_item.content);
                        }));
                        if (buffer.length) css.push(open + buffer.join("\n") + close);
                        if (isOperaMini) css.push("* { content: normal !important; }");
                        return css.join("\n\n");
                    }
                    function overwriteDeclaration(rule, name, value) {
                        var _value;
                        var _selectors = [];
                        _value = value.replace(viewportUnitExpression, replaceValues);
                        if (options.hacks) _value = options.hacks.overwriteDeclaration(rule, name, _value);
                        if (name) {
                            _selectors.push(rule.selectorText);
                            _value = name + ": " + _value + ";";
                        }
                        var _rule = rule.parentRule;
                        while (_rule) {
                            if (_rule.media) _selectors.unshift("@media " + _rule.media.mediaText); else if (_rule.conditionText) _selectors.unshift("@supports " + _rule.conditionText);
                            _rule = _rule.parentRule;
                        }
                        return {
                            selector: _selectors,
                            content: _value
                        };
                    }
                    function replaceValues(match, number, unit) {
                        var _base = dimensions[unit];
                        var _number = parseFloat(number) / 100;
                        return _number * _base + "px";
                    }
                    function getViewport() {
                        var vh = window.innerHeight;
                        var vw = window.innerWidth;
                        return {
                            vh,
                            vw,
                            vmax: Math.max(vw, vh),
                            vmin: Math.min(vw, vh)
                        };
                    }
                    function importCrossOriginLinks(next) {
                        var _waiting = 0;
                        var decrease = function() {
                            _waiting--;
                            if (!_waiting) next();
                        };
                        forEach.call(document.styleSheets, (function(sheet) {
                            if (!sheet.href || origin(sheet.href) === origin(location.href) || sheet.ownerNode.getAttribute("data-viewport-units-buggyfill") === "ignore") return;
                            _waiting++;
                            convertLinkToStyle(sheet.ownerNode, decrease);
                        }));
                        if (!_waiting) next();
                    }
                    function origin(url) {
                        return url.slice(0, url.indexOf("/", url.indexOf("://") + 3));
                    }
                    function convertLinkToStyle(link, next) {
                        getCors(link.href, (function() {
                            var style = document.createElement("style");
                            style.media = link.media;
                            style.setAttribute("data-href", link.href);
                            style.textContent = this.responseText;
                            link.parentNode.replaceChild(style, link);
                            next();
                        }), next);
                    }
                    function getCors(url, success, error) {
                        var xhr = new XMLHttpRequest;
                        if ("withCredentials" in xhr) xhr.open("GET", url, true); else if (typeof XDomainRequest !== "undefined") {
                            xhr = new XDomainRequest;
                            xhr.open("GET", url);
                        } else throw new Error("cross-domain XHR not supported");
                        xhr.onload = success;
                        xhr.onerror = error;
                        xhr.send();
                        return xhr;
                    }
                    return {
                        version: "0.6.1",
                        findProperties,
                        getCss: getReplacedViewportUnits,
                        init: initialize,
                        refresh
                    };
                }));
            })();
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        const Method = {
            GET: "GET",
            POST: "POST",
            PUT: "PUT",
            DELETE: "DELETE"
        };
        const headers = new Headers;
        headers.append("X-Requested-With", "XMLHttpRequest");
        new DOMParser;
        const checkStatus = response => {
            if (!response.ok) throw Error(response.statusText);
            return response;
        };
        const extractIn = (response, format = "json") => {
            const formats = {
                json: () => response.json(),
                text: () => response.text(),
                formData: () => response.formData(),
                blob: () => response.blob()
            };
            if (format in formats) return formats[format]();
            return console.error("there is no such format");
        };
        const showStatus = status => {
            const activeModal = document.querySelector(".popup_show");
            if (activeModal) {
                const closeBtn = activeModal.querySelector(".popup__close");
                const event = new Event("click");
                closeBtn.dispatchEvent(event);
            }
            flsModules.popup.open("#status-template");
        };
        const request = async ({url, body = null, method = Method.GET}, format, cb = showStatus) => {
            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers
                });
                if (response.redirected) {
                    window.location.href = response.url;
                    return;
                }
                const status = await checkStatus(response);
                const data = await extractIn(status, format);
                if (cb) return cb(data);
                return data;
            } catch (err) {
                showStatus(err);
                return console.error(err);
            }
        };
        const api = {
            load({url, format, cb}) {
                return request({
                    url
                }, format, cb);
            },
            upload({url, body, boolean, format, cb}) {
                if (!boolean) headers.append("Content-Type", "application/x-www-form-urlencoded");
                return request({
                    url,
                    method: Method.POST,
                    body,
                    headers
                }, format, cb);
            }
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.dataset.required === "tel") if (!this.phoneTest(formRequiredItem)) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            },
            phoneTest(formRequiredItem) {
                const phoneNumberPattern = /^\+7 \([1-9]\d{2}\) [1-9]\d{2}-[1-9]\d{3}$/;
                return phoneNumberPattern.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            document.addEventListener("submit", (function(e) {
                const form = e.target;
                formSubmitAction(form, e);
            }));
            document.addEventListener("reset", (function(e) {
                const form = e.target;
                formValidate.formClean(form);
            }));
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        console.log(formMethod);
                        form.classList.add("_sending");
                        if (formMethod === "GET") api.load({
                            url: formAction,
                            method: formMethod,
                            format: "text",
                            cb: response => {
                                formSent(form, response);
                            }
                        }); else api.upload({
                            url: formAction,
                            method: formMethod,
                            body: formData,
                            cb: response => {
                                formSent(form, response);
                            }
                        });
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        form.dataset.gotoError && form.dataset.gotoError;
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                console.log(12);
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popupSelector = form.dataset.popupMessage;
                        const activeModal = document.querySelector(".popup_show");
                        if (activeModal) flsModules.popup.close(activeModal, 100);
                        const popup = document.querySelector(popupSelector);
                        if (popup) flsModules.popup.open(popupSelector); else {
                            const parser = new DOMParser;
                            const response = parser.parseFromString(responseResult, "text/html");
                            const el = response.body.querySelector(popupSelector);
                            document.body.appendChild(el);
                            setTimeout((() => {
                                flsModules.popup.open(popupSelector);
                            }), 110);
                        }
                    }
                }), 0);
                formValidate.formClean(form);
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            async getModal(link, selector) {
                console.log(link);
                api.load({
                    url: link,
                    format: "text",
                    cb: responseResult => {
                        const parser = new DOMParser;
                        const response = parser.parseFromString(responseResult, "text/html");
                        const el = response.querySelector(selector);
                        document.body.appendChild(el);
                        formFieldsInit({
                            viewPass: false,
                            autoHeight: false
                        });
                        this.open();
                    }
                });
            }
            eventsPopup() {
                document.addEventListener("click", async function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        await this.getModal(buttonOpen.href, this._dataValue);
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ей, такого попа нет. Проверьте правильность ввода.`);
                }
            }
            close(selectorValue, timer = 800) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock(timer) : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                console.log(this.previousOpen);
                setTimeout((() => {
                    this.previousOpen.element.remove();
                }), timer);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            async _openToHash() {
                const button = document.querySelector(`[${this.options.attributeOpenButton}="${window.location.hash}"]`);
                if (button) await this.getModal(button.href, button.getAttribute(this.options.attributeOpenButton)).then((() => {
                    this.open(button.getAttribute(this.options.attributeOpenButton));
                }));
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        __webpack_require__(958);
        const inputMasks = document.querySelectorAll("input");
        if (inputMasks.length) Inputmask("+99999999999").mask("._mask-tel");
        function isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_getSlideTransformEl(slideEl) {
            return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementTransitionEnd(el, callback) {
            function fireCallBack(e) {
                if (e.target !== el) return;
                callback.call(el, e);
                el.removeEventListener("transitionend", fireCallBack);
            }
            if (callback) el.addEventListener("transitionend", fireCallBack);
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                if (gridEnabled) {
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                } else {
                    nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !nextSlide) nextSlide = slides[0];
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                }
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function swiper_core_addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses: swiper_core_addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = elementIndex(slides[0]);
                return elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = utils_makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Controller(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                controller: {
                    control: void 0,
                    inverse: false,
                    by: "slide"
                }
            });
            swiper.controller = {
                control: void 0
            };
            function LinearSpline(x, y) {
                const binarySearch = function search() {
                    let maxIndex;
                    let minIndex;
                    let guess;
                    return (array, val) => {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1) {
                            guess = maxIndex + minIndex >> 1;
                            if (array[guess] <= val) minIndex = guess; else maxIndex = guess;
                        }
                        return maxIndex;
                    };
                }();
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                let i1;
                let i3;
                this.interpolate = function interpolate(x2) {
                    if (!x2) return 0;
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
                    return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
                return this;
            }
            function getInterpolateFunction(c) {
                swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
            }
            function setTranslate(_t, byController) {
                const controlled = swiper.controller.control;
                let multiplier;
                let controlledTranslate;
                const Swiper = swiper.constructor;
                function setControlledTranslate(c) {
                    if (c.destroyed) return;
                    const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                    if (swiper.params.controller.by === "slide") {
                        getInterpolateFunction(c);
                        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                    }
                    if (!controlledTranslate || swiper.params.controller.by === "container") {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) multiplier = 1;
                        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                    }
                    if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
                    c.updateProgress(controlledTranslate);
                    c.setTranslate(controlledTranslate, swiper);
                    c.updateActiveIndex();
                    c.updateSlidesClasses();
                }
                if (Array.isArray(controlled)) {
                    for (let i = 0; i < controlled.length; i += 1) if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
                } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
            }
            function setTransition(duration, byController) {
                const Swiper = swiper.constructor;
                const controlled = swiper.controller.control;
                let i;
                function setControlledTransition(c) {
                    if (c.destroyed) return;
                    c.setTransition(duration, swiper);
                    if (duration !== 0) {
                        c.transitionStart();
                        if (c.params.autoHeight) utils_nextTick((() => {
                            c.updateAutoHeight();
                        }));
                        utils_elementTransitionEnd(c.wrapperEl, (() => {
                            if (!controlled) return;
                            c.transitionEnd();
                        }));
                    }
                }
                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i += 1) if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
                } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
            }
            function removeSpline() {
                if (!swiper.controller.control) return;
                if (swiper.controller.spline) {
                    swiper.controller.spline = void 0;
                    delete swiper.controller.spline;
                }
            }
            on("beforeInit", (() => {
                if (typeof window !== "undefined" && (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
                    const controlElement = document.querySelector(swiper.params.controller.control);
                    if (controlElement && controlElement.swiper) swiper.controller.control = controlElement.swiper; else if (controlElement) {
                        const onControllerSwiper = e => {
                            swiper.controller.control = e.detail[0];
                            swiper.update();
                            controlElement.removeEventListener("init", onControllerSwiper);
                        };
                        controlElement.addEventListener("init", onControllerSwiper);
                    }
                    return;
                }
                swiper.controller.control = swiper.params.controller.control;
            }));
            on("update", (() => {
                removeSpline();
            }));
            on("resize", (() => {
                removeSpline();
            }));
            on("observerUpdate", (() => {
                removeSpline();
            }));
            on("setTranslate", ((_s, translate, byController) => {
                if (!swiper.controller.control || swiper.controller.control.destroyed) return;
                swiper.controller.setTranslate(translate, byController);
            }));
            on("setTransition", ((_s, duration, byController) => {
                if (!swiper.controller.control || swiper.controller.control.destroyed) return;
                swiper.controller.setTransition(duration, byController);
            }));
            Object.assign(swiper.controller, {
                setTranslate,
                setTransition
            });
        }
        function A11y(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                a11y: {
                    enabled: true,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            });
            swiper.a11y = {
                clicked: false
            };
            let liveRegion = null;
            function notify(message) {
                const notification = liveRegion;
                if (notification.length === 0) return;
                notification.innerHTML = "";
                notification.innerHTML = message;
            }
            function getRandomNumber(size) {
                if (size === void 0) size = 16;
                const randomChar = () => Math.round(16 * Math.random()).toString(16);
                return "x".repeat(size).replace(/x/g, randomChar);
            }
            function makeElFocusable(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("tabIndex", "0");
                }));
            }
            function makeElNotFocusable(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("tabIndex", "-1");
                }));
            }
            function addElRole(el, role) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("role", role);
                }));
            }
            function addElRoleDescription(el, description) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-roledescription", description);
                }));
            }
            function addElControls(el, controls) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-controls", controls);
                }));
            }
            function addElLabel(el, label) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-label", label);
                }));
            }
            function addElId(el, id) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("id", id);
                }));
            }
            function addElLive(el, live) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-live", live);
                }));
            }
            function disableEl(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-disabled", true);
                }));
            }
            function enableEl(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-disabled", false);
                }));
            }
            function onEnterOrSpaceKey(e) {
                if (e.keyCode !== 13 && e.keyCode !== 32) return;
                const params = swiper.params.a11y;
                const targetEl = e.target;
                if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) if (!e.target.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) return;
                if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
                    if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                    if (swiper.isEnd) notify(params.lastSlideMessage); else notify(params.nextSlideMessage);
                }
                if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                    if (swiper.isBeginning) notify(params.firstSlideMessage); else notify(params.prevSlideMessage);
                }
                if (swiper.pagination && targetEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) targetEl.click();
            }
            function updateNavigation() {
                if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                const {nextEl, prevEl} = swiper.navigation;
                if (prevEl) if (swiper.isBeginning) {
                    disableEl(prevEl);
                    makeElNotFocusable(prevEl);
                } else {
                    enableEl(prevEl);
                    makeElFocusable(prevEl);
                }
                if (nextEl) if (swiper.isEnd) {
                    disableEl(nextEl);
                    makeElNotFocusable(nextEl);
                } else {
                    enableEl(nextEl);
                    makeElFocusable(nextEl);
                }
            }
            function hasPagination() {
                return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
            }
            function hasClickablePagination() {
                return hasPagination() && swiper.params.pagination.clickable;
            }
            function updatePagination() {
                const params = swiper.params.a11y;
                if (!hasPagination()) return;
                swiper.pagination.bullets.forEach((bulletEl => {
                    if (swiper.params.pagination.clickable) {
                        makeElFocusable(bulletEl);
                        if (!swiper.params.pagination.renderBullet) {
                            addElRole(bulletEl, "button");
                            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                        }
                    }
                    if (bulletEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true"); else bulletEl.removeAttribute("aria-current");
                }));
            }
            const initNavEl = (el, wrapperId, message) => {
                makeElFocusable(el);
                if (el.tagName !== "BUTTON") {
                    addElRole(el, "button");
                    el.addEventListener("keydown", onEnterOrSpaceKey);
                }
                addElLabel(el, message);
                addElControls(el, wrapperId);
            };
            const handlePointerDown = () => {
                swiper.a11y.clicked = true;
            };
            const handlePointerUp = () => {
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        if (!swiper.destroyed) swiper.a11y.clicked = false;
                    }));
                }));
            };
            const handleFocus = e => {
                if (swiper.a11y.clicked) return;
                const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!slideEl || !swiper.slides.includes(slideEl)) return;
                const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
                const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
                if (isActive || isVisible) return;
                if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
                if (swiper.isHorizontal()) swiper.el.scrollLeft = 0; else swiper.el.scrollTop = 0;
                swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
            };
            const initSlides = () => {
                const params = swiper.params.a11y;
                if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
                if (params.slideRole) addElRole(swiper.slides, params.slideRole);
                const slidesLength = swiper.slides.length;
                if (params.slideLabelMessage) swiper.slides.forEach(((slideEl, index) => {
                    const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel(slideEl, ariaLabelMessage);
                }));
            };
            const init = () => {
                const params = swiper.params.a11y;
                swiper.el.append(liveRegion);
                const containerEl = swiper.el;
                if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
                if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
                const wrapperEl = swiper.wrapperEl;
                const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
                const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
                addElId(wrapperEl, wrapperId);
                addElLive(wrapperEl, live);
                initSlides();
                let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (nextEl) nextEl.forEach((el => initNavEl(el, wrapperId, params.nextSlideMessage)));
                if (prevEl) prevEl.forEach((el => initNavEl(el, wrapperId, params.prevSlideMessage)));
                if (hasClickablePagination()) {
                    const paginationEl = utils_makeElementsArray(swiper.pagination.el);
                    paginationEl.forEach((el => {
                        el.addEventListener("keydown", onEnterOrSpaceKey);
                    }));
                }
                swiper.el.addEventListener("focus", handleFocus, true);
                swiper.el.addEventListener("pointerdown", handlePointerDown, true);
                swiper.el.addEventListener("pointerup", handlePointerUp, true);
            };
            function destroy() {
                if (liveRegion) liveRegion.remove();
                let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (nextEl) nextEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
                if (prevEl) prevEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
                if (hasClickablePagination()) {
                    const paginationEl = utils_makeElementsArray(swiper.pagination.el);
                    paginationEl.forEach((el => {
                        el.removeEventListener("keydown", onEnterOrSpaceKey);
                    }));
                }
                swiper.el.removeEventListener("focus", handleFocus, true);
                swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
                swiper.el.removeEventListener("pointerup", handlePointerUp, true);
            }
            on("beforeInit", (() => {
                liveRegion = utils_createElement("span", swiper.params.a11y.notificationClass);
                liveRegion.setAttribute("aria-live", "assertive");
                liveRegion.setAttribute("aria-atomic", "true");
            }));
            on("afterInit", (() => {
                if (!swiper.params.a11y.enabled) return;
                init();
            }));
            on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                if (!swiper.params.a11y.enabled) return;
                initSlides();
            }));
            on("fromEdge toEdge afterInit lock unlock", (() => {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            }));
            on("paginationUpdate", (() => {
                if (!swiper.params.a11y.enabled) return;
                updatePagination();
            }));
            on("destroy", (() => {
                if (!swiper.params.a11y.enabled) return;
                destroy();
            }));
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime();
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            let pausedByPointerEnter;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                if (pausedByPointerEnter) return;
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                autoplayStartTime = (new Date).getTime();
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pausedByPointerEnter = true;
                if (swiper.animating || swiper.autoplay.paused) return;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                pausedByPointerEnter = false;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("_freeModeStaticRelease", (() => {
                if (pausedByTouch || pausedByInteraction) resume();
            }));
            on("_freeModeNoMomentumRelease", (() => {
                if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function Thumb(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let initialized = false;
            let swiperCreated = false;
            swiper.thumbs = {
                swiper: null
            };
            function onThumbClick() {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                const clickedIndex = thumbsSwiper.clickedIndex;
                const clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
                if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
                let slideToIndex;
                if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
                if (swiper.params.loop) swiper.slideToLoop(slideToIndex); else swiper.slideTo(slideToIndex);
            }
            function init() {
                const {thumbs: thumbsParams} = swiper.params;
                if (initialized) return false;
                initialized = true;
                const SwiperClass = swiper.constructor;
                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    Object.assign(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    Object.assign(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper.update();
                } else if (utils_isObject(thumbsParams.swiper)) {
                    const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                    Object.assign(thumbsSwiperParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                    swiperCreated = true;
                }
                swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on("tap", onThumbClick);
                return true;
            }
            function update(initial) {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                let thumbsToActivate = 1;
                const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.forEach((slideEl => slideEl.classList.remove(thumbActiveClass)));
                if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for (let i = 0; i < thumbsToActivate; i += 1) utils_elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl => {
                    slideEl.classList.add(thumbActiveClass);
                })); else for (let i = 0; i < thumbsToActivate; i += 1) if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    const currentThumbsIndex = thumbsSwiper.activeIndex;
                    let newThumbsIndex;
                    let direction;
                    if (thumbsSwiper.params.loop) {
                        const newThumbsSlide = thumbsSwiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`))[0];
                        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                    }
                    if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1; else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1; else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
                    }
                }
            }
            on("beforeInit", (() => {
                const {thumbs} = swiper.params;
                if (!thumbs || !thumbs.swiper) return;
                if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
                    const document = ssr_window_esm_getDocument();
                    const getThumbsElementAndInit = () => {
                        const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                        if (thumbsElement && thumbsElement.swiper) {
                            thumbs.swiper = thumbsElement.swiper;
                            init();
                            update(true);
                        } else if (thumbsElement) {
                            const onThumbsSwiper = e => {
                                thumbs.swiper = e.detail[0];
                                thumbsElement.removeEventListener("init", onThumbsSwiper);
                                init();
                                update(true);
                                thumbs.swiper.update();
                                swiper.update();
                            };
                            thumbsElement.addEventListener("init", onThumbsSwiper);
                        }
                        return thumbsElement;
                    };
                    const watchForThumbsToAppear = () => {
                        if (swiper.destroyed) return;
                        const thumbsElement = getThumbsElementAndInit();
                        if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
                    };
                    requestAnimationFrame(watchForThumbsToAppear);
                } else {
                    init();
                    update(true);
                }
            }));
            on("slideChange update resize observerUpdate", (() => {
                update();
            }));
            on("setTransition", ((_s, duration) => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                thumbsSwiper.setTransition(duration);
            }));
            on("beforeDestroy", (() => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                if (swiperCreated) thumbsSwiper.destroy();
            }));
            Object.assign(swiper.thumbs, {
                init,
                update
            });
        }
        function effect_init_effectInit(params) {
            const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
            on("beforeInit", (() => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            }));
            on("setTranslate", (() => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            }));
            on("setTransition", ((_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            }));
            on("transitionEnd", (() => {
                if (swiper.params.effect !== effect) return;
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) return;
                    swiper.slides.forEach((slideEl => {
                        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                    }));
                    recreateShadows();
                }
            }));
            let requireUpdateOnVirtual;
            on("virtualUpdate", (() => {
                if (swiper.params.effect !== effect) return;
                if (!swiper.slides.length) requireUpdateOnVirtual = true;
                requestAnimationFrame((() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                }));
            }));
        }
        function effect_target_effectTarget(effectParams, slideEl) {
            const transformEl = utils_getSlideTransformEl(slideEl);
            if (transformEl !== slideEl) {
                transformEl.style.backfaceVisibility = "hidden";
                transformEl.style["-webkit-backface-visibility"] = "hidden";
            }
            return transformEl;
        }
        function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
            let {swiper, duration, transformElements, allSlides} = _ref;
            const {activeIndex} = swiper;
            const getSlide = el => {
                if (!el.parentElement) {
                    const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                    return slide;
                }
                return el.parentElement;
            };
            if (swiper.params.virtualTranslate && duration !== 0) {
                let eventTriggered = false;
                let transitionEndTarget;
                if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                    const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                }));
                transitionEndTarget.forEach((el => {
                    utils_elementTransitionEnd(el, (() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }));
                }));
            }
        }
        function EffectFade(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                fadeEffect: {
                    crossFade: false
                }
            });
            const setTranslate = () => {
                const {slides} = swiper;
                const params = swiper.params.fadeEffect;
                for (let i = 0; i < slides.length; i += 1) {
                    const slideEl = swiper.slides[i];
                    const offset = slideEl.swiperSlideOffset;
                    let tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    let ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                    const targetEl = effect_target_effectTarget(params, slideEl);
                    targetEl.style.opacity = slideOpacity;
                    targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
                }
            };
            const setTransition = duration => {
                const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                transformElements.forEach((el => {
                    el.style.transitionDuration = `${duration}ms`;
                }));
                effect_virtual_transition_end_effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformElements,
                    allSlides: true
                });
            };
            effect_init_effectInit({
                effect: "fade",
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        const createSlider = (el, options) => {
            let mergedOptions;
            const defaultOptions = {
                modules: [ A11y ],
                slidesPerView: "auto",
                speed: 300,
                a11y: true
            };
            if (options && typeof options === "object") {
                mergedOptions = {
                    ...defaultOptions,
                    ...options
                };
                if (options.modules) mergedOptions.modules = [ ...new Set([ ...defaultOptions.modules, ...options.modules ]) ];
            }
            sliders.push([ el, mergedOptions || defaultOptions ]);
        };
        const sliders = [];
        function initSliders() {
            sliders.forEach((element => {
                new Swiper(element[0], element[1]);
            }));
        }
        window.addEventListener("load", (function(e) {
            const catalogItemSliderMin = new Swiper(".catalog_item-body__slider-min", {
                modules: [ Pagination, Thumb ],
                slidesPerView: "auto",
                watchSlidesProgress: true,
                spaceBetween: 10
            });
            createSlider(".catalog_item-body__slider-big", {
                modules: [ Pagination, Thumb ],
                slidesPerView: 1,
                thumbs: {
                    swiper: catalogItemSliderMin
                }
            });
            const mainImg = new Swiper(".main-body__img", {
                modules: [ EffectFade, Controller ],
                effect: "fade",
                slidesPerView: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                speed: 2e3,
                on: {
                    init: function() {
                        const slides = document.querySelectorAll(".main-body__img .swiper-slide");
                        slides.forEach((slide => {
                            slide.style.display = "block";
                        }));
                    }
                }
            });
            new Swiper(".main-body__slider", {
                modules: [ Pagination, Controller, Autoplay ],
                slidesPerView: 1,
                autoHeight: false,
                speed: 2e3,
                autoplay: {
                    delay: 5e3
                },
                pagination: {
                    el: ".main-body__pagination",
                    clickable: true
                },
                on: {
                    init: function() {
                        const slides = document.querySelectorAll(".main-body__slider .swiper-slide");
                        slides.forEach((slide => {
                            slide.style.display = "block";
                        }));
                    },
                    slideChange: function(swiper) {
                        mainImg.slideTo(swiper.activeIndex, 2e3);
                    }
                }
            });
            createSlider(".main-body__category", {
                slidesPerView: 3,
                autoHeight: false,
                spaceBetween: 10,
                breakpoints: {
                    768: {
                        slidesPerView: 4
                    },
                    1100: {
                        slidesPerView: 6
                    }
                }
            });
            if (document.querySelector(".card_slider")) {
                const blockArr = document.querySelectorAll(".card_slider");
                blockArr.forEach((item => {
                    const slider = item.querySelector(".card_slider-body");
                    const sliderPrevBtn = item.querySelector("._prev");
                    const sliderNextBtn = item.querySelector("._next");
                    createSlider(slider, {
                        modules: [ Navigation ],
                        slidesPerView: 2,
                        spaceBetween: 10,
                        navigation: {
                            prevEl: sliderPrevBtn,
                            nextEl: sliderNextBtn
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 3
                            },
                            920: {
                                slidesPerView: 4
                            },
                            1100: {
                                slidesPerView: 5
                            }
                        }
                    });
                }));
            }
            initSliders();
        }));
        window.initSliders = initSliders;
        let addWindowScrollEvent = false;
        window.addEventListener("hashchange", (() => {
            const anchor = window.location.hash;
            if (anchor) {
                const target = document.getElementById(anchor.substring(1));
                if (target) target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }
        }));
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var scripts_choices = __webpack_require__(19);
        if (document.querySelector(".header-search__select")) {
            const selectArr = document.querySelectorAll(".header-search__select select");
            selectArr.forEach((item => {
                new scripts_choices(item, {
                    searchEnabled: false,
                    itemSelectText: "",
                    shouldSort: false
                });
            }));
        }
        if (document.querySelector(".header-search__input")) {
            const header = document.querySelector(".header");
            const input = header.querySelector(".header-search__input");
            const inputClear = header.querySelector(".header-search__close");
            input.addEventListener("input", (e => {
                const {target} = e;
                if (target.value.length > 0) inputClear.classList.add("_visible"); else inputClear.classList.remove("_visible");
            }));
            inputClear.addEventListener("click", (() => {
                input.value = "";
                inputClear.classList.remove("_visible");
            }));
        }
        if (document.querySelector(".catalog")) {
            const catalog = document.querySelector(".catalog");
            const catalogBody = document.querySelector(".catalog-body");
            const catalogOpenBtn = document.querySelectorAll("._open-catalog");
            const catalogCloseBtn = catalog.querySelector(".catalog__close");
            const catalogColArr = catalog.querySelectorAll(".catalog-col");
            const catalogSubmenuArr = catalog.querySelectorAll(".catalog-col_submenu");
            const body = document.querySelector("body");
            const header = document.querySelector(".header");
            const closeCatalog = () => {
                catalog.classList.remove("_open");
                body.classList.remove("lock");
                catalogSubmenuArr.forEach((item => item.classList.remove("_open")));
                catalogColArr.forEach((item => {
                    const submenuItems = item.querySelectorAll("._submenu");
                    submenuItems.forEach((item => item.classList.remove("_active")));
                }));
            };
            const escClose = e => {
                if (e.key === "Escape") closeCatalog();
            };
            catalogOpenBtn.forEach((item => item.addEventListener("click", (() => {
                if (catalog.classList.contains("_open")) closeCatalog(); else {
                    catalog.classList.add("_open");
                    body.classList.add("lock");
                    catalog.style.padding = `${header.scrollHeight / 1.15}px 0 0`;
                    catalogBody.style.height = `calc(100vh - ${header.scrollHeight / 1.15}px)`;
                    document.addEventListener("keydown", escClose);
                    document.removeEventListener("keyup", escClose);
                }
            }))));
            catalogCloseBtn.addEventListener("click", closeCatalog);
            catalogColArr.forEach(((item, index) => {
                const submenuItems = item.querySelectorAll("._submenu");
                submenuItems.forEach(((submenuItem, submenuIndex) => {
                    submenuItem.addEventListener("mouseover", (() => {
                        const catalogSubmenuItems = catalogSubmenuArr[index].querySelectorAll(".catalog-submenu");
                        submenuItems.forEach((item => item.classList.remove("_active")));
                        if (index === 0) {
                            catalogSubmenuArr.forEach((item => item.classList.remove("_open")));
                            catalogColArr.forEach((item => {
                                const submenuItemsReset = item.querySelectorAll("._submenu");
                                submenuItemsReset.forEach((item => item.classList.remove("_active")));
                            }));
                        } else if (index === 1) catalogSubmenuArr[1].classList.remove("_open");
                        catalogSubmenuItems.forEach((item => item.classList.remove("_active")));
                        submenuItem.classList.add("_active");
                        catalogSubmenuArr[index].classList.add("_open");
                        catalogSubmenuItems[submenuIndex].classList.add("_active");
                    }));
                }));
            }));
        }
        if (document.querySelector(".mobile_nav")) {
            const body = document.querySelector("body");
            const nav = document.querySelector(".mobile_nav");
            const menu = document.querySelector(".menu");
            const openMenuBtn = document.querySelector(".mobile_nav__item_menu");
            window.onscroll = function() {
                myFunction();
            };
            function myFunction() {
                if (window.pageYOffset > 50) menu.classList.add("_sticky"); else menu.classList.remove("_sticky");
            }
            window.addEventListener("scroll", myFunction);
            openMenuBtn.addEventListener("click", (() => {
                if (menu.classList.contains("open")) {
                    menu.classList.remove("open");
                    nav.classList.remove("open");
                    body.classList.remove("lock");
                } else {
                    menu.classList.add("open");
                    nav.classList.add("open");
                    body.classList.add("lock");
                }
            }));
        }
        if (document.querySelector(".lk_layout-create__select select")) {
            const select = document.querySelector(".lk_layout-create__select select");
            const choices = new scripts_choices(select, {
                itemSelectText: "",
                removeItemButton: true,
                renderSelectedChoices: "always",
                noResultsText: "Ничего не найдено"
            });
            const selectItemsListHTML = Array.from(choices.choiceList.element.querySelectorAll(".choices__item"));
            let selectItemsList = selectItemsListHTML.map((item => ({
                value: item.dataset.value,
                checked: false
            })));
            choices.passedElement.element.addEventListener("choice", (e => {
                const {detail} = e;
                const currentItem = selectItemsList.find((item => item.value === detail.choice.value));
                if (currentItem.checked) {
                    currentItem.checked = false;
                    setTimeout((() => {
                        choices.removeActiveItemsByValue(detail.choice.value);
                    }), 0);
                } else currentItem.checked = true;
            }));
        }
        if (document.querySelector(".cart_item-content__count")) {
            const counterArr = document.querySelectorAll(".cart_item-content__count");
            counterArr.forEach((item => {
                const buttons = item.querySelectorAll("button");
                const input = item.querySelector("input");
                buttons[0].addEventListener("click", (() => {
                    if (input.value - 1 >= 0) input.value -= 1;
                }));
                buttons[1].addEventListener("click", (() => {
                    input.value = +input.value + 1;
                }));
            }));
        }
        if (document.querySelector(".header-search__tips")) {
            const header = document.querySelector(".header");
            const searchInput = header.querySelector(".header-search .header-search__input");
            const searchTips = header.querySelector(".header-search__tips");
            searchInput.addEventListener("input", (e => {
                const {target} = e;
                if (target.value.length >= 3) searchTips.classList.add("_open"); else searchTips.classList.remove("_open");
            }));
            searchInput.addEventListener("focus", (e => {
                const {target} = e;
                if (target.value.length >= 3) searchTips.classList.add("_open"); else searchTips.classList.remove("_open");
            }));
            searchInput.addEventListener("focusout", (e => {
                const {target} = e;
                searchTips.classList.remove("_open");
            }));
        }
        if (document.querySelector(".lk_layout-withdraw__top-type")) {
            const radioBtns = document.querySelectorAll(".lk_layout-withdraw__top-type input[type=radio]");
            const inputsLists = document.querySelectorAll(".lk_layout-withdraw__inputs");
            radioBtns.forEach((item => {
                item.addEventListener("change", (() => {
                    inputsLists.forEach((item => item.classList.remove("active")));
                    Array.from(inputsLists).filter((inputItem => item.dataset.type === inputItem.dataset.type))[0].classList.add("active");
                }));
            }));
        }
        if (document.querySelector("._up-down")) {
            const sortItem = document.querySelector("._up-down");
            const sortItemBtn = document.querySelector("._up-down .btn");
            const sortItemInput = sortItem.querySelector("input");
            sortItemBtn.addEventListener("click", (() => {
                if (sortItemInput.checked) if (sortItem.classList.contains("_up")) sortItem.classList.remove("_up"); else sortItem.classList.add("_up");
            }));
        }
        if (document.querySelector(".reviews-card")) {
            const cards = document.querySelectorAll(".reviews-card");
            cards.forEach((element => {
                const comment = element.querySelector("._comment-text");
                const btn = element.querySelector(".reviews-card__link");
                btn.addEventListener("click", (() => {
                    if (comment.classList.contains("_open")) {
                        comment.classList.remove("_open");
                        btn.classList.remove("_open");
                    } else {
                        comment.classList.add("_open");
                        btn.classList.add("_open");
                    }
                }));
            }));
        }
        if (document.querySelector(".to_cart-counter")) {
            const btnToCart = document.querySelector(".btn-to-cart");
            const counter = document.querySelector(".to_cart-counter");
            const counterBtnArr = document.querySelectorAll(".to_cart-counter__content button");
            const counterInput = document.querySelector(".to_cart-counter__content input");
            const openCounter = () => {
                btnToCart.classList.add("_hidden");
                counter.classList.remove("_hidden");
            };
            const closeCounter = () => {
                btnToCart.classList.remove("_hidden");
                counter.classList.add("_hidden");
                counterInput.value = 1;
            };
            btnToCart.addEventListener("click", openCounter);
            counterBtnArr[0].addEventListener("click", (() => {
                counterInput.value = +counterInput.value + 1;
            }));
            counterBtnArr[1].addEventListener("click", (() => {
                if (counterInput.value > 0) counterInput.value = +counterInput.value - 1;
                if (counterInput.value <= 0) closeCounter();
            }));
        }
        if (document.querySelector("[data-current-stat]")) {
            const statItems = document.querySelectorAll("[data-current-stat]");
            const starFill = `<img src="./img/icons/star.svg" alt="">`;
            const starFillHalf = `<img src="./img/icons/star-0.5.svg" alt="">`;
            const starNone = `<img src="./img/icons/star-grey.svg" alt="">`;
            statItems.forEach((item => {
                const count = +item.dataset.currentStat;
                if (Number.isInteger(count)) item.innerHTML = `${starFill.repeat(Math.floor(count))}${starNone.repeat(5 - count)}`; else item.innerHTML = `${starFill.repeat(Math.floor(count))}${starFillHalf}${starNone.repeat(5 - Math.round(count))}`;
            }));
        }
        if (document.querySelector(".category_select")) {
            const categorySelectList = document.querySelectorAll(".category_select");
            categorySelectList.forEach((item => {
                const selectTop = item.querySelector(".category_select__top");
                const selectDropdown = item.querySelector(".category_select__dropdown");
                const categorySelectList = item.querySelectorAll("._dropdown-item");
                selectTop.addEventListener("click", (() => {
                    if (item.classList.contains("_open")) {
                        item.classList.remove("_open");
                        selectDropdown.style.height = 0;
                        categorySelectList.forEach((categorySelect => {
                            const categorySelectDropdown = categorySelect.querySelector("._dropdown-item__list");
                            const categorySelectInputList = categorySelect.querySelectorAll("._checkbox input");
                            const categorySelectInputListArr = Array.from(categorySelectInputList);
                            const isSomeInputChecked = categorySelectInputListArr.some((input => input.checked));
                            if (isSomeInputChecked) ; else {
                                categorySelect.classList.remove("_open");
                                categorySelectDropdown.style.height = 0;
                            }
                        }));
                    } else {
                        item.classList.add("_open");
                        selectDropdown.style.height = `${selectDropdown.scrollHeight + 60}px`;
                    }
                }));
                document.addEventListener("mouseup", (function(e) {
                    if (!item.contains(e.target)) {
                        item.classList.remove("_open");
                        selectDropdown.style.height = 0;
                    }
                }));
                categorySelectList.forEach((categorySelect => {
                    const categorySelectTop = categorySelect.querySelector("._dropdown-item__top");
                    const categorySelectDropdown = categorySelect.querySelector("._dropdown-item__list");
                    const categorySelectInputList = categorySelect.querySelectorAll("._checkbox input");
                    categorySelectInputList.forEach((input => {
                        input.addEventListener("change", (() => {
                            if (Array.from(categorySelectInputList).filter((item => item.checked)).length > 0) item.classList.add("_selected"); else item.classList.remove("_selected");
                        }));
                    }));
                    categorySelectTop.addEventListener("click", (() => {
                        if (categorySelect.classList.contains("_open")) {
                            const prevHeight = +selectDropdown.style.height.split("px")[0];
                            selectDropdown.style.height = `${prevHeight - categorySelectDropdown.scrollHeight}px`;
                            categorySelect.classList.remove("_open");
                            categorySelectDropdown.style.height = 0;
                        } else {
                            categorySelect.classList.add("_open");
                            categorySelectDropdown.style.height = `${categorySelectDropdown.scrollHeight + 40}px`;
                            const prevHeight = +selectDropdown.style.height.split("px")[0];
                            selectDropdown.style.height = `${prevHeight + categorySelectDropdown.scrollHeight + 60}px`;
                        }
                    }));
                }));
            }));
        }
        var viewport_units_buggyfill = __webpack_require__(837);
        viewport_units_buggyfill.init({
            force: true
        });
        if (document.querySelector(".lk_layout-withdraw")) {
            const form = document.querySelector(".lk_layout-withdraw");
            const typeInputList = form.querySelectorAll(".lk_layout-withdraw__top-type ._radio-type input");
            const withdrawInputList = form.querySelectorAll(".lk_layout-withdraw__inputs input");
            const btn = form.querySelector(".lk_layout-withdraw__btn");
            const disableForm = () => {
                typeInputList.forEach((item => item.disabled = true));
                withdrawInputList.forEach((item => item.disabled = true));
                btn.disabled = true;
            };
            btn.addEventListener("click", disableForm);
        }
        window["FLS"] = true;
        isWebp();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
    })();
})();