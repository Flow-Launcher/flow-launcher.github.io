---
id: 8BE6E623BC294D4684F86A47CA797742
images:
- categories.png
- date-past.png
- lorem.png
- random.png
tags:
- Text Tools
---

This plugin lets you generate a wide variety of data types for testing purposes. It can be useful when you need to fill a database with placeholder data, test an API, or create a sample dataset for a project.

## Usage

To use this plugin, type its action keyword (`fake` by default) followed by the category and type of data you want to generate. For example, to generate a random number, you would use the following syntax:

```
fake random number
```

You can also use additional arguments when generating data. Available arguments are usually displayed under the first generated result. For example, to generate a number between 10 and 20, you would use the following syntax:

```
fake random number min:10 max:20
```

Most arguments are command-specific, but there are two arguments that are available in all commands:

* `repeat:n` — generates the result `n` times. For example:
  ```
  > fake random number repeat:5
  < 60, 92, 40, 1, 87
  ```
* `lang:xx` — generates the result in the specified language when applicable. For example:
  ```
  > fake name full
  < Anthony Russel
  
  > fake name full lang:pl
  < Aleksandra Kowalska
  ```

## Full list of supported categories

* Internet
  * Avatar
  * Email
  * ExampleEmail
  * Username
  * UsernameUnicode
  * DomainName
  * DomainWord
  * DomainSuffix
  * IP
  * Port
  * IPEndpoint
  * IPv6
  * IPv6Endpoint
  * UserAgent
  * Mac
  * Password
  * Color
  * Protocol
  * Url
  * UrlWithPath
  * UrlRootedPath
* Address
  * ZipCode
  * City
  * StreetAddress
  * CityPrefix
  * CitySuffix
  * StreetName
  * BuildingNumber
  * StreetSuffix
  * SecondaryAddress
  * County
  * Country
  * FullAddress
  * CountryCode
  * State
  * StateAbbr
  * Latitude
  * Longitude
  * Direction
  * CardinalDirection
  * OrdinalDirection
* Commerce
  * Department
  * Price
  * Categories
  * ProductName
  * Color
  * Product
  * ProductAdjective
  * ProductMaterial
  * Ean8
  * Ean13
* Company
  * Suffix
  * Name
  * CatchPhrase
  * BS
* Database
  * Column
  * Type
  * Collation
  * Engine
* Date
  * Past
  * PastOffset
  * Soon
  * SoonOffset
  * Future
  * FutureOffset
  * Between
  * BetweenOffset
  * Recent
  * RecentOffset
  * Timespan
  * Month
  * Weekday
* Finance
  * Account
  * AccountName
  * Amount
  * TransactionType
  * Currency
  * CreditCardNumber
  * CreditCardCvv
  * BitcoinAddress
  * EthereumAddress
  * RoutingNumber
  * BIC
  * IBAN
* Hacker
  * Abbreviation
  * Adjective
  * Noun
  * Verb
  * IngVerb
  * Phrase
* Images
  * DataUri
  * PicsumUrl
  * LoremFlickrUrl
* Lorem
  * Word
  * Sentence
  * Paragraph
  * Text
  * Lines
  * Slug
* Name
  * Full
  * First
  * Last
  * Prefix
  * Suffix
* Job
  * Title
  * Descriptor
  * Area
  * Type
* Phone
  * Number
  * NumberFormat
* Rant
  * Review
* System
  * FileName
  * DirectoryPath
  * FilePath
  * CommonFileName
  * MimeType
  * CommonFileType
  * CommonFileExt
  * FileType
  * FileExt
  * Semver
  * Version
  * Exception
  * AndroidId
  * ApplePushToken
  * BlackberryPint
* Vehicle
  * Vin
  * Manufacturer
  * Model
  * Type
  * Fuel
* Random
  * Number
  * Even
  * Odd
  * Double
  * Decimal
  * Float
  * Byte
  * SByte
  * Int
  * UInt
  * Long
  * ULong
  * Short
  * UShort
  * Char
  * String2
  * Hash
  * Bool
  * ReplaceNumbers
  * Replace
  * ClampString
  * Word
  * GUID
  * UUID
  * AlphaNumeric
  * Hexadecimal
