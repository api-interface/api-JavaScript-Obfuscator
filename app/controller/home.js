'use strict';

const Controller = require('egg').Controller;

const JavaScriptObfuscator = require('javascript-obfuscator');

class HomeController extends Controller {
    async index() {
        const { ctx } = this;

        let option = {};
        option['compact'] = true;
        option['controlFlowFlattening'] = true;
        option['controlFlowFlatteningThreshold'] = 0.75;
        option['deadCodeInjection'] = true;
        option['deadCodeInjectionThreshold'] = 0.4;
        option['debugProtection'] = true;
        option['debugProtectionInterval'] = 0;
        option['disableConsoleOutput'] = false;
        option['domainLock'] = [];
        option['domainLockRedirectUrl'] = 'about:blank';
        option['forceTransformStrings'] = [];
        option['identifierNamesCache'] = null;
        option['identifierNamesGenerator'] = 'hexadecimal';
        option['identifiersDictionary'] = [];
        option['identifiersPrefix'] = '';
        option['ignoreImports'] = false;
        option['inputFileName'] = '';
        option['log'] = false;
        option['numbersToExpressions'] = false;
        option['optionsPreset'] = 'default';
        option['renameGlobals'] = false;
        option['renameProperties'] = false;
        option['renamePropertiesMode'] = 'safe';
        option['reservedNames'] = [];
        option['reservedStrings'] = [];
        option['seed'] = 0;
        option['selfDefending'] = false;
        option['simplify'] = true;
        option['sourceMap'] = false;
        option['sourceMapBaseUrl'] = '';
        option['sourceMapFileName'] = '';
        option['sourceMapMode'] = 'separate';
        option['sourceMapSourcesMode'] = 'sources-content';
        option['splitStrings'] = false;
        option['splitStringsChunkLength'] = 10;
        option['stringArray'] = true;
        option['stringArrayCallsTransform'] = true;
        option['stringArrayCallsTransformThreshold'] = 0.5;
        option['stringArrayEncoding'] = [];
        option['stringArrayIndexesType'] = ['hexadecimal-number'];
        option['stringArrayIndexShift'] = true;
        option['stringArrayRotate'] = true;
        option['stringArrayShuffle'] = true;
        option['stringArrayWrappersCount'] = 1;
        option['stringArrayWrappersChainedCalls'] = true;
        option['stringArrayWrappersParametersMaxCount'] = 2;
        option['stringArrayWrappersType'] = 'variable';
        option['stringArrayThreshold'] = 0.75;
        option['target'] = 'browser';
        option['transformObjectKeys'] = false;
        option['unicodeEscapeSequence'] = false;

        const obfuscationResult = JavaScriptObfuscator.obfuscate(
            `alert('asdsad')`, option);



        ctx.body = {
            code: 200,
            result: obfuscationResult.getObfuscatedCode()
        };
    }
}

module.exports = HomeController;