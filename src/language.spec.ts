import {
  AtlassianSupportLanguage,
  GitHubFlaveredMarkdownCodeBlockLanguageMapping,
  markdownToWikiMarkupLanguageMapping,
} from "./language";

const uniq = <T>(array: Array<T>): Array<T> => [...new Set(array)];

describe("AtlassianSupportLanguage", () => {
  describe("enum values", () => {
    const enumValues = Object.values(AtlassianSupportLanguage);

    it("should be uniq", () => {
      expect(enumValues).toEqual(uniq(enumValues));
    });

    it("should not contain at least one capital letter", () => {
      expect(enumValues).toEqual(
        expect.arrayContaining([expect.not.stringMatching(/[A-Z]/)])
      );
    });
  });
});

describe("GitHubFlaveredMarkdownCodeBlockLanguageMapping", () => {
  describe("enum values", () => {
    const enumFlattenValues = Object.values(
      GitHubFlaveredMarkdownCodeBlockLanguageMapping
    ).flat();

    it("should be uniq", () => {
      expect(enumFlattenValues).toEqual(uniq(enumFlattenValues));
    });

    it("should not contain at least one capital letter", () => {
      expect(enumFlattenValues).toEqual(
        expect.arrayContaining([expect.not.stringMatching(/[A-Z]/)])
      );
    });
  });
});

describe("markdownToWikiMarkupLanguageMapping", () => {
  describe("supported github flaver markdown and atlassian wiki code blocklanguage", () => {
    it("should return atlassian wiki markup language", () => {
      const supportedLanguage = "osascript";
      expect(
        markdownToWikiMarkupLanguageMapping.get(supportedLanguage)
      ).toEqual(AtlassianSupportLanguage.AppleScript);
    });
  });

  describe("non supported github flaver markdown and atlassian wiki code block language", () => {
    it("should return undefined", () => {
      const nonSupportedLanguage = "tex";

      expect(
        markdownToWikiMarkupLanguageMapping.get(nonSupportedLanguage)
      ).toBeUndefined();
    });
  });
});
