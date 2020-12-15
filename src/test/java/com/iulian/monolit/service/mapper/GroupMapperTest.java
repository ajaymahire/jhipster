package com.iulian.monolit.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class GroupMapperTest {

    private GroupMapper groupMapper;

    @BeforeEach
    public void setUp() {
        groupMapper = new GroupMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 1L;
        assertThat(groupMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(groupMapper.fromId(null)).isNull();
    }
}
