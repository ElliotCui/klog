/**
 * blog 编辑表单
 */
define(function (require) {
    var $ = require('$');
    var MarkdownEditor = require('../../common/markdown-editor');

    new MarkdownEditor({
        uploader: {
            post_params: {
                'attach[max_width]': 200
            }
        }
    });
});