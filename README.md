# GiantBombVideoSkill
## Notes
* Example video url: `https://giantbomb-pdl.akamaized.net/2017/07/01/mc_gbecplaydate_06302017_laosdica_1800.mp4`
* Device capabilities check: `event.context.System.device.supportedInterfaces.VideoApp`

## Useful URLS
* [Render Template](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/display-interface-reference)
* [Testing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill)
* [Functional Testing](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-functional-testing)
* [VideoApp.Launch](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/videoapp-interface-reference)
* [Tutorial](https://developer.amazon.com/blogs/post/Tx3DVGG0K0TPUGQ/New-Alexa-Skills-Kit-Template:-Step-by-Step-Guide-to-Build-a-Fact-Skill)

## API Calls
* Lookup Video Categories
  * `https://www.giantbomb.com/api/video_categories/?api_key={api_key}`
  * ``` xml
    <video_category>
        <api_detail_url>
            <![CDATA[ https://www.giantbomb.com/api/video_category/3/ ]]>
        </api_detail_url>
        <site_detail_url>
            <![CDATA[ https://www.giantbomb.com/videos/quick-looks/ ]]>
        </site_detail_url>
        <deck>
            <![CDATA[
            Our editors provide commentary as they play through 20 minutes or more of uninterrupted gameplay.
            ]]>
        </deck>
        <id>
            3
        </id>
        <name>
            <![CDATA[ Quick Looks ]]>
        </name>
        <image/>
    </video_category>
    ```
## Appendix
