# Pseudocode of Lempel–Ziv–Welch (LZW)

## Compressor of LZW

    STRING = get input symbol
    WHILE there are still input symbols DO
        SYMBOL = get input symbol
	    IF STRING + SYMBOL is in th STRINGTABLE THEN
		    STRING = STRING + SYMBOL
    	ELSE
	    	Output the code for STRING
		    Add STRING + SYMBOL to STRINGTABLE
		    STRING = SYMBOL
	    END
    END
    Output the code for STRING


## Decompressor of LZW

    Read CODE
    STRING = TABLE[CODE]   // translation table
    output STRING
    WHILE there are still codes to receive DO
	    Read CODE from encoder
	    IF Code is not in the translation table THEN
		    Entry = STRING + STRING[0]
	    ELSE
		    ENTRY = get translation of CODE
	    END
	    Output Entry
        add STRING + ENTRY[0] to the translation table
        STRING = ENTRY
    END
