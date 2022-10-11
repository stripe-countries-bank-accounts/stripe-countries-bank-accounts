export const bankInfoObject = {
  AU: {
    routing_number_1: {
      label: 'BSB',
      field: 'routing_number',
      pattern: {
        min: 6,
        max: 6,
        example: '123456',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        regex: /^[0-9]{5,9}$/.toString(),
        min: 5,
        max: 9,
        example: '123456789',
      },
    },
  },
  AT: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^AT\d{18}$/.toString(),
        min: 0,
        max: 0,
        example: 'AT611904300234573201',
      },
    },
  },
  BE: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^BE\d{14}$/.toString(),
        min: 16,
        max: 16,
        example: 'BE12345678912345',
      },
    },
  },
  BR: {
    routing_number_1: {
      label: 'Bank code',
      field: 'routing_number',
      pattern: {
        min: 3,
        max: 3,
        example: '123',
      },
    },
    routing_number_2: {
      label: 'Branch code',
      field: 'routing_number',
      pattern: {
        min: 4,
        max: 4,
        example: '4567',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        min: 0,
        max: 0,
        example: 'BR1800360305000010009795493C1',
      },
    },
  },
  BG: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^BG\d{2}[A-Z]{4}\d{6}[A-Z0-9]{8}$/.toString(),
        min: 22,
        max: 22,
        example: 'BG80BNBG96611020345678',
      },
    },
  },
  CA: {
    routing_number_1: {
      label: 'Routing Number',
      field: 'routing_number',
      pattern: {
        min: 9,
        max: 9,
        example: '111000000',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        min: 0,
        max: 0,
        example: '000123456789',
      },
    },
  },
  HR: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^HR\d{19}$/.toString(),
        min: 21,
        max: 21,
        example: 'HR1210010051863000160',
      },
    },
  },
  CY: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^CY\d{10}[A-Z0-9]{16}$/.toString(),
        min: 28,
        max: 28,
        example: 'CY17002001280000001200527600',
      },
    },
  },
  CZ: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^CZ\d{22}$/.toString(),
        min: 24,
        max: 24,
        example: 'CZ6508000000192000145399',
      },
    },
  },
  DK: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^DK\d{16}$/.toString(),
        min: 0,
        max: 0,
        example: 'DK5000400440116243',
      },
    },
  },
  EE: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^EE\d{18}$/.toString(),
        min: 20,
        max: 20,
        example: 'EE382200221020145685',
      },
    },
  },
  FI: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^FI\d{16}$/.toString(),
        min: 0,
        max: 0,
        example: 'FI2112345600000785',
      },
    },
  },
  FR: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^FR\d{12}{A-Z0-9}{11}\d{2}$/.toString(),
        min: 27,
        max: 27,
        example: 'FR1420041010050500013M02606',
      },
    },
  },
  DE: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^DE\d{20}$/.toString(),
        min: 22,
        max: 22,
        example: 'DE89370400440532013000',
      },
    },
  },
  GI: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^GI\d{2}[A-Z]{4}[A-Z0-9]{15}$/.toString(),
        min: 23,
        max: 23,
        example: 'GI75NWBK000000007099453',
      },
    },
  },
  GR: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^GR\d{9}{A-Z0-9}{16}$/.toString(),
        min: 27,
        max: 27,
        example: 'GR1601101250000000012300695',
      },
    },
  },
  HK: {
    routing_number_1: {
      label: 'Clearing Code',
      field: 'routing_number',
      pattern: {
        min: 3,
        max: 3,
        example: '123',
      },
    },
    routing_number_2: {
      label: 'Branch code',
      field: 'routing_number',
      pattern: {
        min: 3,
        max: 3,
        example: '456',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        regex: /^\d{6}[-]?\d{3}$/.toString(),
        min: 6,
        max: 9,
        example: '123456-789',
      },
    },
  },
  HU: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^HU\d{26}$/.toString(),
        min: 28,
        max: 28,
        example: 'HU42117730161111101800000000',
      },
    },
  },
  IN: {
    routing_number_1: {
      label: 'IFSC Code',
      field: 'routing_number',
      pattern: {
        min: 11,
        max: 11,
        example: 'HDFC0004051',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        min: 0,
        max: 0,
        example: '000123456789',
      },
    },
  },
  IE: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^IE\d{2}[A-Z]{4}\d{14}$/.toString(),
        min: 22,
        max: 22,
        example: 'IE29AIBK93115212345678',
      },
    },
  },
  IT: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^IT\d{2}[A-Z]{1}\d{10}[A-Z0-9]{12}$/.toString(),
        min: 27,
        max: 27,
        example: 'IT60X0542811101000000123456',
      },
    },
  },
  JP: {
    routing_number_1: {
      label: 'Bank code',
      field: 'routing_number',
      pattern: {
        min: 1,
        max: 4,
        example: '0123',
      },
    },
    routing_number_2: {
      label: 'Branch code',
      field: 'routing_number',
      pattern: {
        min: 3,
        max: 3,
        example: '456',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',

      pattern: {
        regex: /^[0-9]{7,9}$/.toString(),
        min: 7,
        max: 8,
        example: '1234567',
      },
    },
  },
  LV: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^LV\d{2}[A-Z]{4}[A-Z0-9]{13}$/.toString(),
        min: 21,
        max: 21,
        example: 'LV80BANK0000435195001',
      },
    },
  },
  LI: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^LI\d{7}[A-Z0-9]{12}$/.toString(),
        min: 21,
        max: 21,
        example: 'LI21088100002324013AA',
      },
    },
  },
  LT: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^LT\d{18}$/.toString(),
        min: 20,
        max: 20,
        example: 'LT121000011101001000',
      },
    },
  },
  LU: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^LU\d{5}{A-Z0-9}{13}$/.toString(),
        min: 20,
        max: 20,
        example: 'LU280019400644750000',
      },
    },
  },
  MY: {
    routing_number_1: {
      label: 'BIC',
      field: 'routing_number',
      pattern: {
        min: 8,
        max: 11,
        example: 'HBMBMYKL',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        regex: /^[0-9]{5,17}$/.toString(),
        min: 5,
        max: 17,
        example: '1234567890',
      },
    },
  },
  MT: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^MT\d{2}[A-Z]{4}\d{5}[A-Z0-9]{18}$/.toString(),
        min: 31,
        max: 31,
        example: 'MT84MALT011000012345MTLCAST001S',
      },
    },
  },
  MX: {
    account_number: {
      label: 'CLABE',
      field: 'account_number',
      pattern: {
        regex: /^[0-9]{18}$/.toString(),
        min: 18,
        max: 18,
        example: '123456789012345678',
      },
    },
  },
  NL: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^NL\d{2}[A-Z]{4}\d{10}$/.toString(),
        min: 18,
        max: 18,
        example: 'NL39RABO0300065264',
      },
    },
  },
  NZ: {
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        regex: /^[A-Z0-9]{15,16}$/.toString(),
        min: 15,
        max: 16,
        example: 'AABBBB3456789YZZ',
      },
    },
  },
  NO: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^NO\d{13}$/.toString(),
        min: 15,
        max: 15,
        example: 'NO9386011117947',
      },
    },
  },
  PL: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^PL\d{26}$/.toString(),
        min: 28,
        max: 28,
        example: 'PL61109010140000071219812874',
      },
    },
  },
  PT: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^PT\d{23}$/.toString(),
        min: 25,
        max: 25,
        example: 'PT50123443211234567890172',
      },
    },
  },
  RO: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^RO\d{2}[A-Z]{4}[A-Z0-9]{16}$/.toString(),
        min: 24,
        max: 24,
        example: 'RO49AAAA1B31007593840000',
      },
    },
  },
  SG: {
    routing_number_1: {
      label: 'Bank code',
      field: 'routing_number',
      pattern: {
        min: 4,
        max: 4,
        example: '1234',
      },
    },
    routing_number_2: {
      label: 'Branch code',
      field: 'routing_number',
      pattern: {
        min: 3,
        max: 3,
        example: '567',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        regex: /^[0-9]{6,19}$/.toString(),
        min: 6,
        max: 19,
        example: '1234567890123456789',
      },
    },
  },
  SK: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^SK\d{22}$/.toString(),
        min: 24,
        max: 24,
        example: 'SK3112000000198742637541',
      },
    },
  },
  SI: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^SI\d{17}$/.toString(),
        min: 19,
        max: 19,
        example: 'SI56263300012039086',
      },
    },
  },
  ES: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^ES\d{22}$/.toString(),
        min: 24,
        max: 24,
        example: 'ES9121000418450200051332',
      },
    },
  },
  SE: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^SE\d{22}$/.toString(),
        min: 24,
        max: 24,
        example: 'SE3550000000054910000003',
      },
    },
  },
  CH: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^CH\d{7}{A-Z0-9}{12}$/.toString(),
        min: 21,
        max: 21,
        example: 'CH9300762011623852957',
      },
    },
  },
  TH: {
    routing_number_1: {
      label: 'Bank code',
      field: 'routing_number',
      pattern: {
        min: 3,
        max: 3,
        example: '999',
      },
    },
    routing_number_2: {
      label: 'Branch code',
      field: 'routing_number',
      pattern: {
        min: 4,
        max: 4,
        example: '0001',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        regex: /^[0-9]{6,15}$/.toString(),
        min: 6,
        max: 15,
        example: '12345678901236',
      },
    },
  },
  GB: {
    routing_number_1: {
      label: 'Sort Code',
      field: 'routing_number',
      pattern: {
        min: 6,
        max: 8,
        example: '12-34-56',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        min: 0,
        max: 0,
        example: 'GB82WEST12345698765432',
      },
    },
  },
  US: {
    routing_number_1: {
      label: 'Routing Number',
      field: 'routing_number',
      pattern: {
        min: 9,
        max: 9,
        example: '111000000',
      },
    },
    account_number: {
      label: 'Account number',
      field: 'account_number',
      pattern: {
        min: 0,
        max: 0,
        example: '000123456789',
      },
    },
  },
  AE: {
    account_number: {
      label: 'IBAN',
      field: 'account_number',
      pattern: {
        regex: /^AE\d{21}$/.toString(),
        min: 23,
        max: 23,
        example: 'AE070331234567890123456',
      },
    },
  },
}
