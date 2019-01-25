import find from "lodash/find";

describe("ouiFile", () => {
    let $timeout;
    let TestUtils;

    const getAttachments = (element) => element[0].querySelector(".oui-file-attachments");
    const getDropArea = (element) => element[0].querySelector(".oui-file-droparea");
    const getInputFile = (element) => element[0].querySelector(".oui-file__input_file");
    const getInputHidden = (element) => element[0].querySelector(".oui-file__input_hidden");
    const getMultipleSelector = (element) => element[0].querySelector(".oui-file-multiple");
    const getCustomSelector = (element) => element[0].querySelector(".oui-file-selector");

    const mockFile = {
        name: "test.png",
        size: 150000,
        type: "image/png"
    };

    const mockFiles = [mockFile];

    beforeEach(angular.mock.module("oui.file"));
    beforeEach(angular.mock.module("oui.file.configuration"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        TestUtils = _TestUtils_;
    }));

    describe("Provider", () => {
        let configuration;
        const foo = { foo: "bar" };

        angular.module("oui.file.configuration", [
            "oui.file"
        ]).config(ouiFileConfigurationProvider => {
            ouiFileConfigurationProvider.setTranslations(foo);
            ouiFileConfigurationProvider.setUnits([foo]);
        });

        beforeEach(inject(_ouiFileConfiguration_ => {
            configuration = _ouiFileConfiguration_;
        }));

        it("should have custom translations", () => {
            expect(configuration.translations.foo).toEqual("bar");
        });

        it("should have custom units", () => {
            expect(find(configuration.units, foo)).toBeDefined();
        });
    });

    describe("Component", () => {
        describe("Basic", () => {
            let element;
            let controller;
            let selector;
            let inputFile;
            let inputHidden;

            beforeEach(() => {
                element = TestUtils.compileTemplate('<oui-file model="$ctrl.model"></oui-file>');
                controller = element.controller("ouiFile");

                $timeout.flush();

                selector = getCustomSelector(element);
                inputFile = getInputFile(element);
                inputHidden = getInputHidden(element);
            });

            it("should have a default classname", () => {
                expect(element.hasClass("oui-file")).toBeTruthy();
            });

            it("should have form inputs and a custom selector", () => {
                expect(inputFile).toBeDefined();
                expect(inputHidden).toBeDefined();
                expect(selector).toBeDefined();
            });

            it("should have default id and name attributes on form inputs", () => {
                expect(inputFile.id).toBeDefined();
                expect(inputHidden.id).toBeDefined();
                expect(inputHidden.name).toBeDefined();
            });

            it("should open file selector", () => {
                const onClickSpy = jasmine.createSpy("onClickSpy");
                controller.fileSelector.on("click", onClickSpy);
                controller.openFileSelector();
                expect(onClickSpy).toHaveBeenCalled();
            });

            it("should add file when changed", () => {
                controller.fileSelector.triggerHandler({
                    type: "change",
                    target: {
                        files: mockFiles // Mock FileList
                    }
                });
            });
        });

        describe("Multiple", () => {
            let element;
            let controller;
            let inputFile;
            let selector;
            let attachments;

            beforeEach(() => {
                element = TestUtils.compileTemplate('<oui-file model="$ctrl.model" multiple></oui-file>');
                controller = element.controller("ouiFile");

                $timeout.flush();

                inputFile = getInputFile(element);
                selector = getMultipleSelector(element);
                attachments = getAttachments(element);
            });

            it("should have input file multiple", () => {
                expect(inputFile.multiple).toBeTruthy();
            });

            it("should show multiple selector and attachments", () => {
                expect(selector).toBeTruthy();
                expect(attachments).toBeTruthy();
            });

            it("should add file when changed", () => {
                controller.fileSelector.triggerHandler({
                    type: "change",
                    target: {
                        files: mockFiles // Mock FileList
                    }
                });
            });
        });

        describe("Drop area", () => {
            let element;
            let controller;
            let inputFile;
            let selector;
            let attachments;

            beforeEach(() => {
                element = TestUtils.compileTemplate('<oui-file model="$ctrl.model" droparea></oui-file>');
                controller = element.controller("ouiFile");

                $timeout.flush();

                inputFile = getInputFile(element);
                selector = getDropArea(element);
                attachments = getAttachments(element);
            });

            it("should have input file multiple", () => {
                expect(inputFile.multiple).toBeTruthy();
            });

            it("should show drop area and attachments", () => {
                expect(selector).toBeTruthy();
                expect(attachments).toBeTruthy();
            });

            it("should update classname with drag & drop events", () => {
                controller.fileDroparea.triggerHandler("dragenter");
                expect(controller.fileDroparea.hasClass("oui-file-droparea_dragover")).toBeTruthy();

                controller.fileDroparea.triggerHandler("dragleave");
                expect(controller.fileDroparea.hasClass("oui-file-droparea_dragover")).toBeFalsy();
            });

            it("should add files when dropped", () => {
                controller.fileDroparea.triggerHandler({
                    type: "drop",
                    dataTransfer: {
                        files: mockFiles
                    }
                });
            });
        });

        describe("File management", () => {
            let element;
            let controller;
            let onSelectSpy;

            beforeEach(() => {
                onSelectSpy = jasmine.createSpy("onSelectSpy");
                element = TestUtils.compileTemplate(`
                <oui-file
                    model="$ctrl.model"
                    on-select="$ctrl.onSelectSpy(modelValue)">
                </oui-file>`, {
                    onSelectSpy
                });
                controller = element.controller("ouiFile");

                $timeout.flush();
            });

            it("should return file's informations", () => {
                const infos = controller.getFileInfos(mockFile).infos;
                expect(infos.name).toBe("test");
                expect(infos.extension).toBe("png");
                expect(infos.size).toBe("(150 KB)");
            });

            it("should return undefined as extesion", () => {
                const infos = controller.getFileInfos({ name: "test" }).infos;
                expect(infos.extension).toBeUndefined();
            });

            it("should check file validity", () => {
                controller.maxsize = 200000;
                expect(controller.checkFileValidity(mockFile).errors).toBeUndefined();
                controller.maxsize = 100000;
                expect(controller.checkFileValidity(mockFile).errors).toBeDefined();
            });

            it("should add file to model", () => {
                controller.addFile(mockFile);
                expect(controller.model).toBeDefined();
                expect(controller.model.length).toBe(1);
                expect(onSelectSpy).toHaveBeenCalledWith(controller.model);
            });

            it("should reset model", () => {
                controller.addFile(mockFile);
                controller.resetFile();
                expect(controller.model).toBeUndefined();
            });

            it("should add files to model", () => {
                controller.addFiles(mockFiles);
                expect(controller.model).toBeDefined();
                expect(controller.model.length).toBe(1);
                expect(onSelectSpy).toHaveBeenCalledWith(controller.model);
            });

            it("should not add duplicate file", () => {
                controller.addFiles(mockFiles);
                controller.addFiles(mockFiles);
                expect(controller.model.length).toBe(1);
            });

            it("should remove file", () => {
                controller.addFiles(mockFiles);
                controller.removeFile(mockFile);
                expect(controller.model.length).toBe(0);
            });
        });

        describe("Form controls", () => {
            const id = "foo";
            const name = "bar";
            let element;
            let controller;
            let inputFile;
            let inputHidden;

            beforeEach(() => {
                element = TestUtils.compileTemplate(`<form name="form">
                    <oui-file id="${id}" name="${name}" model="$ctrl.model"></oui-file>
                </form>`);
                controller = element.find("oui-file").controller("ouiFile");

                $timeout.flush();

                inputFile = getInputFile(element);
                inputHidden = getInputHidden(element);
            });

            it("should move id and name attributes on form input", () => {
                expect(inputFile.id).toBe(`${id}Selector`);
                expect(inputHidden.id).toBe(id);
                expect(inputHidden.name).toBe(name);

                expect(element.find("oui-file").attr("id")).toBeUndefined();
                expect(element.find("oui-file").attr("name")).toBeUndefined();
            });

            it("should set input form $touched", () => {
                const label = angular.element(element[0].querySelector(".oui-file-selector__label"));

                expect(controller.form[name].$touched).toBeFalsy();
                label.triggerHandler("blur");
                expect(controller.form[name].$touched).toBeTruthy();
            });

            it("should update angular form validition", () => {
                expect(controller.form[name].$dirty).toBeFalsy();

                controller.maxsize = 200000;
                controller.checkFileValidity(mockFile);
                expect(controller.form[name].$error.maxsize).toBeUndefined();

                expect(controller.form[name].$dirty).toBeTruthy();

                controller.maxsize = 100000;
                controller.checkFileValidity(mockFile);
                expect(controller.form[name].$error.maxsize).toBeTruthy();

                controller.resetFile();
                expect(controller.form[name].$error.maxsize).toBeUndefined();
            });
        });
    });
});
