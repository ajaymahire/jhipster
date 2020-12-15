package com.iulian.monolit.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.iulian.monolit.web.rest.TestUtil;

public class GroupDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(GroupDTO.class);
        GroupDTO groupDTO1 = new GroupDTO();
        groupDTO1.setId(1L);
        GroupDTO groupDTO2 = new GroupDTO();
        assertThat(groupDTO1).isNotEqualTo(groupDTO2);
        groupDTO2.setId(groupDTO1.getId());
        assertThat(groupDTO1).isEqualTo(groupDTO2);
        groupDTO2.setId(2L);
        assertThat(groupDTO1).isNotEqualTo(groupDTO2);
        groupDTO1.setId(null);
        assertThat(groupDTO1).isNotEqualTo(groupDTO2);
    }
}
