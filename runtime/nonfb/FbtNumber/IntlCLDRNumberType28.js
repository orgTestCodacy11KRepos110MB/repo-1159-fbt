/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<03ae14493190c1a9be1be91e39088fcf>>
 *
 * Generated by LanguageCLDRGenScript
 * @codegen-command: flib/intern/scripts/intl/cldr/gencode_all_plurals.sh
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType28 = {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n % 10 === 1 && (n % 100 < 11 || n % 100 > 19)) {
      return IntlVariations.NUMBER_ONE;
    } else if ((n % 10 >= 2 && n % 10 <= 9) && (n % 100 < 11 || n % 100 > 19)) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType28;
