<script>
import { h } from 'vue';
import components from '.';

export default {
  props: ['msg'],

  render(props) {
    const attachments = [];
    const attachNames = Object.keys(props.msg.attachments);
    // Вложения, с которыми не будут отображаться другие вложения (будут скрыты)
    const singleAttachments = ['sticker', 'gift', 'audio_message'];
    const hasSingleAttach = singleAttachments.some((attach) => attachNames.includes(attach));

    for (const type in props.msg.attachments) {
      const attach = props.msg.attachments[type];
      const component = components[type];

      if (hasSingleAttach && !singleAttachments.includes(type)) {
        continue;
      }

      if (component) {
        attachments.push(
          h(component, { attach })
        );
      } else {
        attachments.push(
          h('div', { class: 'im_attach_unknown' }, `(${type})`)
        );
      }
    }

    if (attachments.length) {
      return h('div', { class: 'im_attachments' }, attachments);
    }
  }
};
</script>

<style>
.im_attach_unknown {
  color: var(--text-dark-steel-gray);
}

.im_attachments {
  user-select: none;
}

.im_attachments > div:not(:first-child) {
  padding-top: 5px;
}

.message_bubble_content > .im_attachments .im_attach_unknown:last-child {
  margin-bottom: -5px;
}

.attach_left_border::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  border-radius: 1px;
  background-color: var(--background-blue);
}
</style>
